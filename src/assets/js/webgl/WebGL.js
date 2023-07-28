// module
import { Stage } from "./Stage";
import { ObjectCylinder } from "./ObjectCylinder";
import { ObjectPlane } from "./ObjectPlane";
import { ObjectCover } from "./ObjectCover";
import { AudioControler } from "../module/AudioControler";

export class WebGL {
  constructor(params) {
    this.params = params;

    this.vector = {
      x: {
        target: 0,
        current: 0,
      },
      y: {
        target: 0,
        current: 0,
      },
      ease: 0.1,
    };

    this.audio = new AudioControler();

    this.stage = new Stage(params, false, false);
    this.stage.init(
      document.getElementById("webgl-canvas"),
      params.longer,
      params.longer
    );
    this.cylinder = new ObjectCylinder(params, this.stage);
    this.plane = new ObjectPlane(params, this.stage);
    this.cover = new ObjectCover(params, this.stage);

    this.raf = this.raf.bind(this);

    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", this.onMove.bind(this), {
        passive: true,
      });
    } else {
      window.addEventListener("touchmove", this.onMove.bind(this), {
        passive: true,
      });
    }
  }

  /**
   * 線形補間
   * https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%BD%A2%E8%A3%9C%E9%96%93
   * @param {number} start
   * @param {number} end
   * @param {number} ease
   * @returns {number} 補完した値
   */
  lerp(start, end, ease) {
    return start * (1 - ease) + end * ease;
  }

  onMove(e) {
    this.vector.x.target = e.touches ? e.touches[0].clientX : e.clientX;
    this.vector.y.target = e.touches ? e.touches[0].clientY : e.clientY;

    this.vector.x.target = 2 * (this.vector.x.target / this.params.w) - 1.0;
    this.vector.y.target = 2 * (this.vector.y.target / this.params.h) - 1.0;

    this.vector.x.target = this.vector.x.target * 2.4;
    this.vector.y.target = this.vector.y.target * -2.4;
  }

  raf() {
    const time = performance.now() * 0.001;
    const gl = this.stage.gl;

    this.vector.x.current = this.lerp(
      this.vector.x.current,
      this.vector.x.target,
      this.vector.ease
    );
    this.vector.y.current = this.lerp(
      this.vector.y.current,
      this.vector.y.target,
      this.vector.ease
    );

    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.BLEND);

    // 深度テストとアルファブレンドの関係上、奥にあるものからレンダリングする
    this.stage.raf();
    this.plane.raf(time, this.vector);
    this.cylinder.raf(time, this.vector);
    this.cover.raf(time);
  }

  resize(params) {
    this.params.w = this.params.w;
    this.params.h = this.params.h;

    this.stage.resize(params.longer, params.longer);
    this.plane.resize(params);
    this.cylinder.resize(params);
    this.cover.resize(params);
  }

  toEnterAnime() {
    const body = document.body;
    if (this.isOnceClick) {
      body.setAttribute("data-clicked", "1");
      this.isOnceClick = false;
      this.audio.play("lightup", false);
      setTimeout(() => {
        this.audio.play("main");
        this.plane.toLightUp();
        this.cylinder.toLightUp();
      }, 300);
    }
  }

  init() {
    console.log("🚀 ~ WebGL init");
    this.plane.init();
    this.cylinder.init();
    this.cover.init();

    this.isOnceClick = true;
    const body = document.body;
    setTimeout(() => {
      body.setAttribute("data-status", "enter");
      if (window.matchMedia("(hover: hover)").matches) {
        window.addEventListener("click", (e) => {
          this.toEnterAnime();
        });
      } else {
        window.addEventListener("touchstart", (e) => {
          this.toEnterAnime();
        });
      }
    }, 300);
  }
}
