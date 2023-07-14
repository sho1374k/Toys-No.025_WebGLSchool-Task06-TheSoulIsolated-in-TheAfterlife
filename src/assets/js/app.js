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
import { TextAnimation } from "./module/TextAnimation";
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

  const textAnimation = new TextAnimation();
  setTimeout(() => {
    textAnimation.init();
    document.body.setAttribute("data-status", "enter");
  }, 300);

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
});
