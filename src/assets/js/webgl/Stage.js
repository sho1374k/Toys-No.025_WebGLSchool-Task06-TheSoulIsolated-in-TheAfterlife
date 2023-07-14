export class Stage {
  constructor(params, isClearColor = true) {
    this.gl = null; // WebGLRenderingContext
    this.canvas = null; // HTMLCanvasElement
    this.isClearColor = isClearColor;
    this.params = params;
    this.params.color = {
      r: 1,
      g: 1,
      b: 1,
      a: 1,
    };
  }

  createWebGLContext() {
    // WebGL コンテキストを初期化する
    const gl = this.canvas.getContext("webgl");
    if (gl == null) {
      throw new Error("webgl not supported");
      return null;
    } else {
      return gl;
    }
  }

  /**
   * canvasのサイズを設定
   * @param {number} w
   * @param {number} h
   */
  setSize(w = window.innerWidth, h = window.innerHeight) {
    this.canvas.width = w;
    this.canvas.height = h;
  }

  /**
   * canvas内でのWebGLのviewportの設定
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   */
  setViewport(x = 0, y = 0, w = this.canvas.width, h = this.canvas.height) {
    this.gl.viewport(x, y, w, h);
  }

  /**
   * クリアする色を設定
   * @param {object} color {r, g, b, a};
   */
  setClearColor(color = { r: 1, g: 1, b: 1, a: 1 }) {
    this.params.color = color;
    this.gl.clearColor(
      this.params.color.r,
      this.params.color.g,
      this.params.color.b,
      this.params.color.a
    );
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  /**
   * @param {number} w
   * @param {number} h
   */
  resize(w = window.innerWidth, h = window.innerHeight) {
    this.setSize(w, h);
    this.setViewport();
  }

  raf() {
    if (this.isClearColor) this.setClearColor();
    this.setViewport(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @param {HTMLElement} canvas WebGLを内包するcanvas要素
   */
  init(canvas) {
    console.log("🚀 ~ Stage init");
    this.canvas = canvas;
    this.gl = this.createWebGLContext(this.canvas);
    this.setSize(this.params.longer, this.params.longer);
    this.setViewport(0, 0, this.canvas.width, this.canvas.height);
    if (this.isClearColor) this.setClearColor();
  }
}
