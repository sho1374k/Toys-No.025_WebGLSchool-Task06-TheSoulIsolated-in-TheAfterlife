// lib: doxas
import { WebGLGeometry } from "./doxas/WebGLGeometry";

// module
import { Object } from "./Object";
import { Utility } from "../module/Utility";

// shader
import fragmentShader from "../../shader/frag/cylinder.glsl";
import vertexShader from "../../shader/vert/cylinder.glsl";

const RADIUS = 0.8;
const Z = -1;
const CONFIG = {
  cylinder: {
    split: 6,
    radius: RADIUS,
    height: 0.0000001,
    limitMax: 19,
    // prettier-ignore
    postiion: [
      [0, 0, Z], // 0
      [0, RADIUS * 1.8, Z], // 1
      [0, RADIUS * 1.8 * -1, Z], // 2
      [0, RADIUS * 1.8 * 2, Z], // 3
      [0, RADIUS * 1.8 * 2 * -1, Z], // 4

      [RADIUS * 1.55, RADIUS * 0.9, Z], // 5
      [RADIUS * 1.55 * -1, RADIUS * 0.9, Z], // 6

      [RADIUS * 1.55, RADIUS * 0.9 * -1, Z], // 7
      [RADIUS * 1.55 * -1, RADIUS * 0.9 * -1, Z], // 8

      [RADIUS * 1.55 * 2, 0, Z], // 9
      [RADIUS * 1.55 * -2, 0, Z], // 10

      [RADIUS * 1.55, RADIUS * 0.9 * 3, Z], // 11
      [RADIUS * 1.55, RADIUS * 0.9 * -3, Z], // 12

      [RADIUS * 1.55 * -1, RADIUS * 0.9 * 3, Z], // 13
      [RADIUS * 1.55 * -1, RADIUS * 0.9 * -3, Z], // 14

      [RADIUS * 1.55 * 2, RADIUS * 0.9 * 2, Z], // 15
      [RADIUS * 1.55 * -1 * 2, RADIUS * 0.9 * 2, Z], // 16

      [RADIUS * 1.55 * 2, RADIUS * 0.9 * -1 * 2, Z], // 17
      [RADIUS * 1.55 * -1 * 2, RADIUS * 0.9 * -1 * 2, Z], // 18
    ],
  },
};

export class ObjectCylinder extends Object {
  constructor(params, stage) {
    super(stage, fragmentShader, vertexShader);
    this.stage = stage;
    this.params = params;
    this.isCreated = false;
    this.mesh = {};

    this.lightPosition = { x: 0.0, y: 0.0, z: 0.1 };
    this.alpha = { value: 0.8 };
    this.color = {
      cylinder: Utility.rgbToGLSLColor(Utility.hex2rgb("#fff")),
    };
    this.lightup = {
      value: 0.0,
    };
  }

  createMesh() {
    const gl = this.gl;

    // geometry作成
    this.mesh.geometry = WebGLGeometry.cylinder(
      CONFIG.cylinder.split,
      CONFIG.cylinder.radius, // top
      CONFIG.cylinder.radius, // bottom
      CONFIG.cylinder.height,
      [1.0, 1.0, 1.0, 1.0] // color
    );

    // VBO作成
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
    this.createUniform("uColor", "v3", this.color.cylinder);
    this.createUniform("uInverseMatrix", "m4", this.m4.identity());
    this.createUniform("uModelMatrix", "m4", this.m4.identity());
    this.createUniform("uMvpMatrix", "m4", this.m4.identity());
    this.createUniform("uNormalMatrix", "m4", this.m4.identity());
    this.createUniform("uTime", "f", 0.0);
    this.createUniform("uAlpha", "f", this.alpha.value);
    this.createUniform("uScale", "f", 0.0);
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
      let model;

      // cylinder群
      for (let i = 0; i < CONFIG.cylinder.limitMax; i++) {
        // モデル座標に回転と移動をかける
        const rotateAxis = v3.create(1.0, 0.0, 0.0);
        const position = CONFIG.cylinder.postiion[i];
        model = m4.translate(
          m4.identity(),
          v3.create(position[0], position[1], position[2])
        ); // 移動
        model = m4.rotate(model, Math.PI * 0.5, rotateAxis);

        // 行列を乗算して MVP 行列を生成する（掛ける順序に注意）
        const vp = m4.multiply(projection, view);
        const mvp = m4.multiply(vp, model);

        // モデル座標変換行列の、逆転置行列を生成する
        const normalMatrix = m4.transpose(m4.inverse(model));

        // uniform更新
        this.updateUniform("uColor", "v3", this.color.cylinder);
        this.updateUniform("uLightPosition", "v3", [
          this.lightPosition.x + v.x.current,
          this.lightPosition.y + v.y.current,
          this.lightPosition.z,
        ]);
        this.updateUniform("uInverseMatrix", "m4", m4.identity());
        this.updateUniform("uModelMatrix", "m4", model);
        this.updateUniform("uMvpMatrix", "m4", mvp);
        this.updateUniform("uNormalMatrix", "m4", normalMatrix);
        this.updateUniform("uTime", "f", time);
        this.updateUniform("uAlpha", "f", this.alpha.value);
        this.updateUniform("uScale", "f", 1.0);
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
        gl.drawElements(
          gl.TRIANGLES,
          this.mesh.ibo.length,
          gl.UNSIGNED_SHORT,
          0
        );
      }
    }
  }

  toLightUp() {
    GSAP.to(this.lightup, {
      duration: 2,
      value: 1.0,
    });
  }

  init() {
    console.log("🚀 ~ Cylinder init");
    this.setCulling();
    this.setDepthTest();
    this.createMesh();

    if (GUI != null) {
      const gui = GUI.addFolder("cylinder");
      gui
        .addColor(this.color, "cylinder")
        .name("color")
        .onChange((value) => {
          this.color.cylinder = value;
        });
      gui
        .add(this.alpha, "value", 0.0, 1.0)
        .name("alpha")
        .onChange((value) => {
          this.alpha.value = value;
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
