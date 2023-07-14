import { Object } from "./Object";

import fragmentShader from "../../shader/frag/cover.glsl";
import vertexShader from "../../shader/vert/cover.glsl";

export class ObjectCover extends Object {
  constructor(params, stage) {
    super(stage.gl, fragmentShader, vertexShader);
    this.stage = stage;
    this.params = params;
    this.isCreated = false;
  }

  createMesh() {
    const gl = this.stage.gl;

    // prettier-ignore
    const position = [
      -1.0, 1.0, 0.0,
      1.0, 1.0, 0.0,
      -1.0, -1.0, 0.0,
      1.0, -1.0, 0.0
    ];
    // prettier-ignore
    const uv = [
      0.0, 0.0,
      1.0, 0.0,
      0.0, 1.0,
      1.0, 1.0
    ];
    const index = [0, 1, 2, 3, 2, 1];

    this.setAttribute("position", new Float32Array(position), 3);
    this.setAttribute("uv", new Float32Array(uv), 2);
    this.setUniform("uTime", "f", 0.0);
    this.indexLength = index.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.getIbo(index));

    this.isCreated = true;
  }

  resize(params) {}

  raf(time) {
    const gl = this.stage.gl;
    if (this.isCreated) {
      super.raf(time);

      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);

      this.updateUniform("uTime", "f", time);
      gl.drawElements(gl.TRIANGLES, this.indexLength, gl.UNSIGNED_SHORT, 0);
    }
  }

  init() {
    console.log("🚀 ~ Plane init");
    this.createMesh();
  }
}
