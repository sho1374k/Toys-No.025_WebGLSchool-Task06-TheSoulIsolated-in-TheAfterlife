// lib: doxas
import { WebGLGeometry } from "./doxas/WebGLGeometry";

// module
import { Object } from "./Object";
import { Utility } from "../module/Utility";

// shader
import fragmentShader from "../../shader/frag/plane.glsl";
import vertexShader from "../../shader/vert/plane.glsl";

export class ObjectPlane extends Object {
  constructor(params, stage) {
    super(stage, fragmentShader, vertexShader);
    this.stage = stage;
    this.params = params;
    this.isCreated = false;
    this.mesh = {};

    this.lightPosition = { x: 0.0, y: 0.0, z: 0.1 };
    this.color = {
      value1: Utility.rgbToGLSLColor(Utility.hex2rgb("#0040ff")),
      value2: Utility.rgbToGLSLColor(Utility.hex2rgb("#99a0ff")),
      value3: Utility.rgbToGLSLColor(Utility.hex2rgb("#00e1ff")),
    };
    this.lightup = {
      value: 0.0,
    };
  }

  createMesh() {
    const gl = this.gl;

    // geometry作成
    this.mesh.geometry = WebGLGeometry.plane(
      6, // size
      6, // size
      [1.0, 1.0, 1.0, 1.0] // color
    );

    // BVO作成
    this.mesh.position = {
      array: this.createVBO(this.mesh.geometry.position),
      location: gl.getAttribLocation(this.program, "position"),
      stride: 3,
    };
    this.mesh.normal = {
      array: this.createVBO(this.mesh.geometry.normal),
      location: gl.getAttribLocation(this.program, "normal"),
      stride: 3,
    };

    // IBO作成
    this.mesh.ibo = {
      data: this.createIBO(this.mesh.geometry.index),
      length: this.mesh.geometry.index.length,
    };

    // uniform作成
    this.createUniform(
      "uLightPosition",
      "v3",
      this.v3.create(
        this.lightPosition.x,
        this.lightPosition.y,
        this.lightPosition.z
      )
    );
    this.createUniform("uColor1", "v3", this.color.value1);
    this.createUniform("uColor2", "v3", this.color.value2);
    this.createUniform("uColor3", "v3", this.color.value3);
    this.createUniform("uInverseMatrix", "m4", this.m4.identity());
    this.createUniform("uModelMatrix", "m4", this.m4.identity());
    this.createUniform("uMvpMatrix", "m4", this.m4.identity());
    this.createUniform("uNormalMatrix", "m4", this.m4.identity());
    this.createUniform("uResolution", "v2", [
      this.params.longer,
      this.params.longer,
    ]);
    this.createUniform("uTime", "f", 0.0);
    this.createUniform("uLightUp", "f", 0.0);

    this.isCreated = true;
  }

  resize(params) {}

  raf(time, vector) {
    const v = vector;
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
      let model = m4.translate(m4.identity(), v3.create(0.0, 0.0, -1.1)); // 移動
      model = m4.rotate(model, 0, rotateAxis);

      // 行列を乗算して MVP 行列を生成する（掛ける順序に注意）
      const vp = m4.multiply(projection, view);
      const mvp = m4.multiply(vp, model);

      // モデル座標変換行列の、逆転置行列を生成する
      const normalMatrix = m4.transpose(m4.inverse(model));

      // uniform更新
      this.updateUniform("uColor1", "v3", this.color.value1);
      this.updateUniform("uColor2", "v3", this.color.value2);
      this.updateUniform("uColor3", "v3", this.color.value3);
      this.updateUniform("uLightPosition", "v3", [
        this.lightPosition.x + v.x.current,
        this.lightPosition.y + v.y.current,
        this.lightPosition.z,
      ]);
      this.updateUniform("uInverseMatrix", "m4", m4.identity());
      this.updateUniform("uModelMatrix", "m4", model);
      this.updateUniform("uMvpMatrix", "m4", mvp);
      this.updateUniform("uNormalMatrix", "m4", normalMatrix);
      this.updateUniform("uResolution", "v2", [
        this.params.longer,
        this.params.longer,
      ]);
      this.updateUniform("uTime", "f", time);
      this.updateUniform("uLightUp", "f", 0.0 + this.lightup.value);

      // VBO設定
      this.updateVBO(
        this.mesh.position.array,
        this.mesh.position.location,
        this.mesh.position.stride
      );
      this.updateVBO(
        this.mesh.normal.array,
        this.mesh.normal.location,
        this.mesh.normal.stride
      );

      // IBO設定
      this.updateIBO(this.mesh.ibo.data);

      // 描画
      gl.drawElements(gl.TRIANGLES, this.mesh.ibo.length, gl.UNSIGNED_SHORT, 0);
    }
  }

  toLightUp() {
    GSAP.to(this.lightup, {
      duration: 2,
      value: 1.0,
    });
  }

  init() {
    console.log("🚀 ~ Plane init");
    this.setCulling();
    this.setDepthTest();
    this.createMesh();

    if (GUI != null) {
      const gui = GUI.addFolder("plane");
      gui
        .addColor(this.color, "value1")
        .name("color1")
        .onChange((value) => {
          this.color.value1 = value;
        });
      gui
        .addColor(this.color, "value2")
        .name("color2")
        .onChange((value) => {
          this.color.value2 = value;
        });
      gui
        .addColor(this.color, "value3")
        .name("color3")
        .onChange((value) => {
          this.color.value3 = value;
        });
      gui
        .add(this.lightup, "value", 0.0, 1.0)
        .name("lightup")
        .onChange((value) => {
          this.lightup.value = value;
        });
    }
  }
}
