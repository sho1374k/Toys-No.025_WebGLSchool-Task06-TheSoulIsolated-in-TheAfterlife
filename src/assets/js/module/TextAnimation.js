export class TextAnimation {
  constructor() {
    this.container = document.getElementById("js-textContainer");
    this.textList = [...document.querySelectorAll(".js-text")];
  }

  init() {
    console.log("🚀 ~ TextAnimation init");
    this.tl = GSAP.timeline({
      repeat: -1,
      repeatDelay: 4,
    });
    // prettier-ignore
    this.tl
    // マ
    .from(this.textList[0], 1, {
      ease: "expo.inOut",
      x: -40 + "%",
      rotateY: "-90deg",
      onStart: () => {
        this.container.setAttribute("data-start", "1");
      }
    }, "<")
    .from(this.textList[0].firstElementChild, .8, {
      ease: "expo.inOut",
      scaleX: .0,
    }, "<")
    // ジ
    .from(this.textList[1], 1, {
      delay: .1,
      ease: "expo.inOut",
      x: 40 + "%",
      rotateZ: "30deg"
    }, "<")
    .from(this.textList[1].firstElementChild, .8, {
      ease: "expo.inOut",
      scale: .0,
    }, "<")
    // で
    .from(this.textList[2], .8, {
      delay: .2,
      ease: "power3.inOut",
      y: 80 + "%",
      rotateZ: "0deg"
    }, "<")
    .from(this.textList[2].firstElementChild, .6, {
      ease: "power3.inOut",
      scaleY: .0,
    }, "<")

    // 難の草冠
    .from(this.textList[3], .8, {
      delay: .6,
      ease: "power4.inOut",
      y: -60 + "%",
      x: -10 + "%",
      rotateX: "90deg"
    }, "<")
    .from(this.textList[3].firstElementChild, .6, {
      ease: "power4.inOut",
      // scaleY: .0,
    }, "<")
    // 難の草冠の下
    .from(this.textList[4], .8, {
      delay: .2,
      ease: "power4.inOut",
      y: 50 + "%",
      x: 10 + "%",
    }, "<")
    .from(this.textList[4].firstElementChild, .6, {
      ease: "power4.inOut",
      scaleY: .0,
    }, "<")
    // 難の右側
    .from(this.textList[5], 1., {
      delay: .0,
      ease: "power4.inOut",
      x: 70 + "%",
      scaleX: 3,
      rotateY: "90deg"
    }, "<")
    .from(this.textList[5].firstElementChild, .2, {
      ease: "power4.inOut",
      opacity: 0,
    }, "<")
    // し
    .from(this.textList[6], 1., {
      delay: .2,
      ease: "power4.inOut",
      x: 70 + "%",
      scaleX: 3,
      rotateY: "90deg",
      rotateZ: "-20deg"
    }, "<")
    .from(this.textList[6].firstElementChild, .2, {
      ease: "power4.inOut",
      opacity: 0,
    }, "<")
    // いの左側
    .from(this.textList[7], 1., {
      delay: .2,
      ease: "power4.inOut",
      y: 100 + "%",
      scaleY: 2,
      rotateY: "90deg",
      rotateZ: "-20deg",
    }, "<")
    .from(this.textList[7].firstElementChild, .2, {
      ease: "power4.inOut",
      opacity: 0,
    }, "<")
    // いの右側
    .from(this.textList[8], 1., {
      delay: .1,
      ease: "power4.inOut",
      y: -100 + "%",
      scaleY: 2,
      rotateY: "90deg",
      rotateZ: "20deg",
    }, "<")
    .from(this.textList[8].firstElementChild, .2, {
      ease: "power4.inOut",
      opacity: 0,
    }, "<")
    // はける
    .to([
      this.textList[3],
      this.textList[4],
      this.textList[5],
      this.textList[6],
      this.textList[7],
      this.textList[8],
    ], .6, {
      delay: 1,
      ease: "expo.inOut",
      scaleX: 10,
      scaleY: 0,
      x: "-500%",
    })
    .to([
      this.textList[0],
      this.textList[1],
      this.textList[2],
    ], .6, {
      ease: "expo.inOut",
      scaleX: 10,
      scaleY: 0,
      x: "500%",
      onComplete: () => {
        this.container.setAttribute("data-start", "0");
      }
    }, "<")
  }
}
