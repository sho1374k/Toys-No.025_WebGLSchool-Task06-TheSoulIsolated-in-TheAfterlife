import { Stage } from "./Stage";
import { ObjectCover } from "./ObjectCover";
import { ObjectTriangles } from "./ObjectTriangles";

export class WebGL {
  constructor(params) {
    this.stageTriangles = new Stage(params, false);
    this.stageTriangles.init(document.getElementById("webgl-triangles"));
    this.objectTriangles = new ObjectTriangles(params, this.stageTriangles);

    this.stageCover = new Stage(params, false);
    this.stageCover.init(document.getElementById("webgl-cover"));
    this.objectCover = new ObjectCover(params, this.stageCover);

    this.raf = this.raf.bind(this);
  }

  raf() {
    const time = performance.now() * 0.001;

    this.stageTriangles.raf();
    this.objectTriangles.raf(time);

    this.stageCover.raf();
    this.objectCover.raf(time);
  }

  resize(params) {
    this.stageTriangles.resize(params.longer, params.longer);
    this.objectTriangles.resize(params);

    this.stageCover.resize(params.longer, params.longer);
    this.objectCover.resize(params);
  }

  init() {
    console.log("🚀 ~ WebGL init");
    this.objectTriangles.init();
    this.objectCover.init();
  }
}
