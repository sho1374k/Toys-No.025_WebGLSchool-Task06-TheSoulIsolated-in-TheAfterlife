import { Object } from "./Object";
import fragmentShader from "../../shader/frag/mesh.glsl";
import vertexShader from "../../shader/vert/mesh.glsl";

const LENGTH = 5;
const SIZE = 0.6;

export class ObjectTriangles {
  constructor(params, stage) {
    this.stage = stage;
    this.params = params;

    this.isCreated = false;
    this.verticesGroup = [];
    this.tl = null;
    this.anime = {
      uProgress1: 0.0,
      uProgress2: 0.0,
      uProgress3: 0.0,
      uAddScale: 1.0,
    };
  }

  // 三角形の頂点
  getVerticesTriangle(size = SIZE) {
    const vertices = [];
    const length = LENGTH;
    const split = 3;
    const theta = 360 / split;
    const radian = (theta * Math.PI) / 180;

    for (let i = 0; i < length; i++) {
      const current = {
        x: Math.cos(radian * i) * size,
        y: Math.sin(radian * i) * size,
        z: 0,
      };

      const next = {
        x: Math.cos(radian * (i + 1)) * size,
        y: Math.sin(radian * (i + 1)) * size,
        z: 0,
      };

      // 中線で二等分する1つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push(current.x, current.y, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);

      // 中線で二等分する2つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);
      vertices.push(next.x, next.y, 0);
    }

    return vertices;
  }

  // 四角形の頂点
  getVerticesPlane(size = SIZE) {
    const vertices = [];
    const length = LENGTH;
    const split = 4;
    const theta = 360 / split;
    const radian = (theta * Math.PI) / 180;

    for (let i = 0; i < length; i++) {
      const current = {
        x: Math.cos(radian * i) * size,
        y: Math.sin(radian * i) * size,
        z: 0,
      };

      const next = {
        x: Math.cos(radian * (i + 1)) * size,
        y: Math.sin(radian * (i + 1)) * size,
        z: 0,
      };

      // 中線で二等分する1つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push(current.x, current.y, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);

      // 中線で二等分する2つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);
      vertices.push(next.x, next.y, 0);
    }

    return vertices;
  }

  // 五角形の頂点
  getVerticesPentagon(size = SIZE) {
    const vertices = [];
    const length = LENGTH;
    const split = length;
    const theta = 360 / split;
    const radian = (theta * Math.PI) / 180;

    for (let i = 0; i < length; i++) {
      const current = {
        x: Math.cos(radian * i) * size,
        y: Math.sin(radian * i) * size,
        z: 0,
      };

      const next = {
        x: Math.cos(radian * (i + 1)) * size,
        y: Math.sin(radian * (i + 1)) * size,
        z: 0,
      };

      // 中線で二等分する1つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push(current.x, current.y, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);

      // 中線で二等分する2つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);
      vertices.push(next.x, next.y, 0);
    }

    return vertices;
  }

  // 星型の頂点
  getVerticesStar(size = SIZE) {
    const vertices = [];
    const length = LENGTH;
    const split = length;
    const theta = 360 / split;
    const radian = (theta * Math.PI) / 180;

    for (let i = 0; i < length; i++) {
      const current = {
        x: Math.cos(radian * i) * size,
        y: Math.sin(radian * i) * size,
        z: 0,
      };

      const next = {
        x: Math.cos(radian * (i + 1)) * size,
        y: Math.sin(radian * (i + 1)) * size,
        z: 0,
      };

      // 中線で二等分する1つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push(current.x * 0.4, current.y * 0.4, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);

      // 中線で二等分する2つ目の三角形
      vertices.push(0, 0, 0);
      vertices.push((current.x + next.x) / 2, (current.y + next.y) / 2, 0);
      vertices.push(next.x * 0.4, next.y * 0.4, 0);
    }

    return vertices;
  }

  createVerticesMesh() {
    console.log("🍕 ~ create triangle");
    const gl = this.stage.gl;

    const position = this.getVerticesTriangle();
    const position2 = this.getVerticesPentagon();
    const position3 = this.getVerticesPlane();
    const position4 = this.getVerticesStar();

    for (let i = 0; i < 7; i++) {
      const mesh = new Object(gl, fragmentShader, vertexShader);
      mesh.setAttribute("position", new Float32Array(position), 3);
      mesh.setAttribute("position2", new Float32Array(position2), 3);
      mesh.setAttribute("position3", new Float32Array(position3), 3);
      mesh.setAttribute("position4", new Float32Array(position4), 3);
      mesh.setUniform("uIndex", "f", i * 1.0);
      mesh.setUniform("uTime", "f", 1.0);
      mesh.setUniform("uScale", "f", 1.0 - i * 0.1);
      mesh.setUniform("uProgress1", "f", 0.0);
      mesh.setUniform("uProgress2", "f", 0.0);
      mesh.setUniform("uProgress3", "f", 0.0);
      mesh.setUniform("uAddScale", "f", 0.5);
      mesh.setUniform("uResolution", "v2", [
        this.params.longer,
        this.params.longer,
      ]);
      mesh.setUniform("uColor", "v4", [
        1.0 - 0.1 * i - 0.3,
        1.0 - 0.1 * i - 0.3,
        1.0 - 0.1 * i - 0.3,
        1,
      ]);

      if (GUI != null) {
        const params = {
          uProgress1: mesh.getUniform("uProgress1"),
          uProgress2: mesh.getUniform("uProgress2"),
          uProgress3: mesh.getUniform("uProgress3"),
          uScale: mesh.getUniform("uScale"),
        };
        const folderMesh = GUI.addFolder(`mesh${i}`);
        folderMesh.close();
        folderMesh
          .add(params, "uProgress1", 0.0, 1.0)
          .name("uProgress1")
          .onChange((value) => {
            mesh.updateUniform("uProgress1", "f", value);
          });
        folderMesh
          .add(params, "uProgress2", 0.0, 1.0)
          .name("uProgress2")
          .onChange((value) => {
            mesh.updateUniform("uProgress2", "f", value);
          });

        folderMesh
          .add(params, "uProgress3", 0.0, 1.0)
          .name("uProgress3")
          .onChange((value) => {
            mesh.updateUniform("uProgress3", "f", value);
          });
        folderMesh
          .add(params, "uScale", 0.0, 1.0)
          .name("uScale")
          .onChange((value) => {
            mesh.updateUniform("uScale", "f", value);
          });
      }

      this.verticesGroup.push(mesh);

      if (i === 7 - 1) this.isCreated = true;
    }
  }

  resize(params) {}

  raf(time) {
    if (this.verticesGroup.length > 0) {
      const gl = this.stage.gl;

      if (this.verticesGroup.length > 0) {
        for (let i = 0; i < this.verticesGroup.length; i++) {
          const mesh = this.verticesGroup[i];
          mesh.raf();
          mesh.updateUniform("uTime", "f", time);
          gl.drawArrays(gl.TRIANGLES, 0, mesh.drawCount);
          if (this.tl != null) {
            mesh.updateUniform("uProgress1", "f", this.anime.uProgress1);
            mesh.updateUniform("uProgress2", "f", this.anime.uProgress2);
            mesh.updateUniform("uProgress3", "f", this.anime.uProgress3);
            mesh.updateUniform("uAddScale", "f", this.anime.uAddScale);
          }
        }
      }
    }
  }

  setAnimation() {
    const DELAY = 4;
    const DURATION = 0.4;
    const EASE_IN_OUT = "power1.inOut";
    const EASE_IN = "power1.in";
    const EASE_OUT = "power1.out";
    const MAX_VALUE = 1.0;
    const MIN_VALUE = 0;

    this.tl = GSAP.timeline({
      repeat: -1,
      repeatDelay: DELAY,
      yoyo: true,
    });

    // prettier-ignore
    this.tl
      // scene1
      .to(this.anime, DURATION, {
        uProgress1: MAX_VALUE,
        ease: EASE_IN_OUT,
      })
      .to(this.anime, DURATION, {
        uAddScale: MIN_VALUE,
        ease: EASE_IN_OUT,
      },"<")
      .to(this.anime, DURATION, {
        delay: DURATION,
        uAddScale: MAX_VALUE,
        ease: EASE_IN_OUT,
      },"<")
      // scene2
      .to(this.anime, DURATION, {
        delay: DELAY,
        uProgress2: MAX_VALUE,
        ease: EASE_IN_OUT,
      })
      .to(this.anime, DURATION, {
        uAddScale: MIN_VALUE,
        ease: EASE_IN_OUT,
      },"<")
      .to(this.anime, DURATION, {
        delay: DURATION,
        uAddScale: MAX_VALUE,
        ease: EASE_IN_OUT,
      },"<")
      // scene3
      .to(this.anime, DURATION, {
        delay: DELAY,
        uProgress3: MAX_VALUE,
        ease: EASE_IN_OUT,
      })
      .to(this.anime, DURATION, {
        uAddScale: MIN_VALUE,
        ease: EASE_IN_OUT,
      },"<")
      .to(this.anime, DURATION, {
        delay: DURATION,
        uAddScale: MAX_VALUE,
        ease: EASE_IN_OUT,
      },"<");
  }

  init() {
    console.log("🚀 ~ Triangles init");
    this.createVerticesMesh();
    this.setAnimation();
  }
}
