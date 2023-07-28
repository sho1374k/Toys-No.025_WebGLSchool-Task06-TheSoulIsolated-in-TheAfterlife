// lib: doxas
import { WebGLGeometry } from "./doxas/WebGLGeometry";

// module
import { Object } from "./Object";

// shader
import fragmentShader from "../../shader/frag/cover.glsl";
import vertexShader from "../../shader/vert/cover.glsl";

export class ObjectCover extends Object {
  constructor(params, stage) {
    super(stage, fragmentShader, vertexShader);
    this.stage = stage;
    this.params = params;
    this.isCreated = false;
    this.mesh = {};
  }

  createMesh() {
    const gl = this.gl;

    this.mesh.geometry = WebGLGeometry.plane(
      6, // size
      6, // size
      [1.0, 1.0, 1.0, 1.0] // color
    );

    // BVOとIBOを作成
    this.mesh.position = {
      array: this.createVBO(this.mesh.geometry.position),
      location: gl.getAttribLocation(this.program, "position"),
      stride: 3,
    };
    this.mesh.uv = {
      array: this.createVBO(this.mesh.geometry.texCoord),
      location: gl.getAttribLocation(this.program, "uv"),
      stride: 2,
    };
    this.mesh.ibo = {
      data: this.createIBO(this.mesh.geometry.index),
      length: this.mesh.geometry.index.length,
    };

    // uniformを作成
    this.createUniform("uMvpMatrix", "m4", this.m4.identity());
    this.createUniform("uTime", "f", 0.0);

    this.isCreated = true;
  }

  resize(params) {}

  raf(time) {
    const gl = this.stage.gl;
    if (this.isCreated) {
      super.raf(time);

      const m4 = this.m4;
      const v3 = this.v3;

      // ビュー・プロジェクション座標変換行列
      const view = this.isOrbitCamera ? this.camera.update() : this.camera;
      const projection = this.createProjection(45, 1, 0.1, 10.0);

      // モデル座標変換行列
      const rotateAxis = v3.create(1.0, 0.0, 0.0);
      let model = m4.translate(m4.identity(), v3.create(0.0, 0.0, 0.5)); // 移動
      model = m4.rotate(model, 0, rotateAxis);

      // 行列を乗算して MVP 行列を生成する（掛ける順序に注意）
      const vp = m4.multiply(projection, view);
      const mvp = m4.multiply(vp, model);

      // uniform更新
      this.updateUniform("uMvpMatrix", "m4", mvp);
      this.updateUniform("uTime", "f", time);

      // VBO設定
      this.updateVBO(
        this.mesh.position.array,
        this.mesh.position.location,
        this.mesh.position.stride
      );
      this.updateVBO(
        this.mesh.uv.array,
        this.mesh.uv.location,
        this.mesh.uv.stride
      );

      // IBO設定
      this.updateIBO(this.mesh.ibo.data);

      // 描画
      gl.drawElements(gl.TRIANGLES, this.mesh.ibo.length, gl.UNSIGNED_SHORT, 0);
    }
  }

  init() {
    console.log("🚀 ~ Cover init");
    this.setCulling();
    this.setDepthTest();
    this.createMesh();

    if (GUI != null) {
      const gui = GUI.addFolder("cover");
    }
  }
}
