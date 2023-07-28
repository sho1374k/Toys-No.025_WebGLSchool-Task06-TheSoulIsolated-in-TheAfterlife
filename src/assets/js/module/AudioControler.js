export class AudioControler {
  constructor() {
    console.log("♫ ~ AudioControl");
    this.audio = {
      main: new Audio("assets/audio/main.mp3"),
      lightup: new Audio("assets/audio/lightup.mp3"),
    };

    this.audio.main.volume = 0.5;
    this.audio.lightup.volume = 1.0;
  }

  play(type, loop = true) {
    switch (type) {
      case "main":
        this.audio.main.play();
        this.audio.main.loop = loop;
        break;
      case "lightup":
        this.audio.lightup.play();
        this.audio.lightup.loop = loop;
        break;
    }
  }

  pause(type) {
    switch (type) {
      case "main":
        this.audio.main.pause();
        this.audio.main.currentTime = 0;
        break;
      case "lightup":
        this.audio.lightup.pause();
        this.audio.lightup.currentTime = 0;
        break;
    }
  }
}
