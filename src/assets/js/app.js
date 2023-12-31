// --------------------------

// scss

// --------------------------
import "../scss/app.scss";

// --------------------------

// lib

// --------------------------
import gsap from "gsap";

// --------------------------

// module

// --------------------------
import { SetGui } from "./lib/setGui";
import { WebGL } from "./webgl/WebGL";

// --------------------------

// window

// --------------------------
window.MODE = process.env.NODE_ENV === "development";
window.GSAP = gsap;

window.addEventListener("DOMContentLoaded", (e) => {
  new SetGui();

  const params = {
    w: window.innerWidth,
    h: window.innerHeight,
    longer: 0,
    shorter: 0,
  };
  params.longer = params.w > params.h ? params.w : params.h;
  params.shorter = params.w < params.h ? params.w : params.h;

  const webgl = new WebGL(params);
  webgl.init();

  GSAP.ticker.add(webgl.raf);
  GSAP.ticker.fps(30);

  const resize = () => {
    params.w = window.innerWidth;
    params.h = window.innerHeight;
    params.longer = params.w > params.h ? params.w : params.h;
    params.shorter = params.w < params.h ? params.w : params.h;

    webgl.resize(params);
  };
  resize();

  window.addEventListener("resize", resize, { passive: true });

  if (window.matchMedia("(hover: hover)").matches) {
    // 右クリック禁止
    document.oncontextmenu = function () {
      return false;
    };
    document.getElementsByTagName("html")[0].oncontextmenu = function () {
      return false;
    };
    document.body.oncontextmenu = function () {
      return false;
    };
  }
});
