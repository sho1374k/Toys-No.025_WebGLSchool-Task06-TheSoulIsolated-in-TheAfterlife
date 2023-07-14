export class Object {
  /**
   * @param {WebGLRenderingContext} gl WebGLコンテキスト
   * @param {source} fragment ピクセルシェーダ
   * @param {source} vertex 頂点シェーダ
   */
  constructor(gl, fragment, vertex) {
    this.gl = gl;

    this.drawCount = null;
    this.uniforms = {};

    const vs = this.createFragmentShader(fragment);
    const fs = this.createVertexShader(vertex);
    this.program = this.createProgramObject(vs, fs);
  }

  /**
   * シェーダオブジェクトを生成
   * @param {WebGLRenderingContext} gl WebGLコンテキスト
   * @param {source} source シェーダ
   * @param {number} type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
   * @returns {WebGLShader}
   */
  createShaderObject(gl, source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      return shader;
    } else {
      throw new Error(gl.getShaderInfoLog(shader));
      return null;
    }
  }

  /**
   * ピクセルシェーダを生成
   * @param {source} source ピクセルシェーダ
   * @returns {WebGLShader}
   */
  createFragmentShader(source) {
    console.log("🙌 ~ create fragment");
    const gl = this.gl;
    return this.createShaderObject(gl, source, gl.FRAGMENT_SHADER);
  }

  /**
   * 頂点シェーダを生成
   * @param {souce} source 頂点シェーダ
   * @returns {WebGLShader}
   */
  createVertexShader(source) {
    console.log("🙌 ~ create vertex");
    const gl = this.gl;
    return this.createShaderObject(gl, source, gl.VERTEX_SHADER);
  }

  // IBOを生成する関数
  getIbo(data) {
    const gl = this.gl;

    // バッファオブジェクトの生成
    const ibo = gl.createBuffer();
    // バッファをバインドする
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);

    // バッファにデータをセット
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Int16Array(data),
      gl.STATIC_DRAW
    );

    // バッファのバインドを無効化
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    // 生成したIBOを返して終了
    return ibo;
  }

  /**
   * プログラムオブジェクトを生成
   * @param {WebGLShader} vs 頂点シェーダ
   * @param {WebGLShader} fs ピクセルシェーダ
   * @returns {WebGLProgram}
   */
  createProgramObject(vs, fs) {
    const gl = this.gl;
    const program = gl.createProgram();

    // シェーダをアタッチ（関連付け）する
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);

    // シェーダオブジェクトをリンクする
    gl.linkProgram(program);

    // リンクが完了するとシェーダオブジェクトは不要になるので削除する
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.useProgram(program);
      return program;
    } else {
      throw new Error(gl.getProgramInfoLog(program));
      return null;
    }
  }

  /**
   * attribute値を設定
   * Reference: https://developer.mozilla.org/ja/docs/Web/API/WebGLRenderingContext/bufferData
   * @param {string} name // 変数名
   * @param {array} data // 型付き配列データ EX）`new Float32Array`
   * @param {number} stride 分割数
   * @param {string} usage データストアの用途を指定（ gl.STATIC_DRAW, gl.DYNAMIC_DRAW, gl.STREAM_DRAW ）
   */
  setAttribute(name, data, stride = 2, usage = "STATIC_DRAW") {
    const gl = this.gl;
    const program = this.program;

    // vbo(vertex buffer object)を生成
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, null); // バッファのバインドを初期化(解除)する
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo); // バッファを gl.ARRAY_BUFFER としてバインドする
    gl.bufferData(gl.ARRAY_BUFFER, data, gl[usage]);

    // 頂点属性のロケーションを設定
    const attribute = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(attribute); // 頂点属性ロケーションの有効化
    gl.vertexAttribPointer(attribute, stride, gl.FLOAT, false, 0, 0); // three.jsの`setAttribute`をする

    // データを誤って再利用しないようにバッファのバインドを解除する
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // 必須: 描画されるインデックスの数を指定する
    if ((name = "position")) {
      this.drawCount = data.length / stride;
    }
  }

  /**
   * unifrom値を更新
   * @param {string} name 変数名
   * @param {string} type 型タイプ
   * @param {any} value 値
   * 変数の文字列タイプ（少し前の three.js 文字列変数）:  https://qiita.com/kitasenjudesign/items/1657d9556591284a43c8
   * uniformで利用するデータの型: https://webglfundamentals.org/webgl/lessons/ja/webgl-shaders-and-glsl.html
   */
  updateUniform(name, type, value) {
    const gl = this.gl;
    switch (type) {
      case "t":
        gl.uniform1i(this.uniforms[name], value); // sampler2D (テクスチャ)
        break;
      case "i":
        gl.uniform1i(this.uniforms[name], value); // int:１つの整数
        break;
      case "f":
        gl.uniform1f(this.uniforms[name], value); // float: １つの浮動小数点
        break;
      case "v1":
        gl.uniform1fv(this.uniforms[name], value); // vec1: １つの浮動小数点を配列に入れたもの
        break;
      case "v2":
        gl.uniform2fv(this.uniforms[name], value); // vec2: ２つの浮動小数点を配列にいれたもの
        break;
      case "v3":
        gl.uniform3fv(this.uniforms[name], value); // vec3: ３つの浮動小数点を配列にいれたもの
        break;
      case "v4":
        gl.uniform4fv(this.uniforms[name], value); // vec4: ４つの浮動小数点を配列にいれたもの
        break;
      case "m2":
        gl.uniformMatrix2fv(this.uniforms[name], value); // mat2: 配列で表現された 2x2 の行列
        break;
      case "m3":
        gl.uniformMatrix3fv(this.uniforms[name], value); // mat3: 配列で表現された 3x3 の行列
        break;
      case "m4":
        gl.uniformMatrix4fv(this.uniforms[name], value); // mat4: 配列で表現された 4x4 の行列
        break;
      default:
        throw new Error("type is not defined");
        break;
    }
  }

  getUniform(name) {
    const gl = this.gl;
    const program = this.program;
    const location = gl.getUniformLocation(program, name);
    return gl.getUniform(program, location);
  }

  /**
   * unifrom値を設定
   * @param {string} name 変数名
   * @param {string} type 型タイプ
   * @param {any} value 値
   */
  setUniform(name, type, value) {
    const gl = this.gl;
    const program = this.program;
    this.uniforms[name] = gl.getUniformLocation(program, name);
    this.updateUniform(name, type, value);
  }

  raf() {
    if (this.program != null) this.gl.useProgram(this.program);
  }
}
