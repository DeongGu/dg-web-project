import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import { Prologue } from "./scenes/Prologue";
import { Plot } from "./scenes/Plot";
// import { MainMenu } from "./scenes/MainMenu";

import { Game, Types } from "phaser";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "matter",
    matter: {
      gravity: {
        x: 0,
        y: 3.3,
      },
      setBounds: {
        left: true,
        right: true,
        top: true,
        bottom: true,
      },
      // debug: true,
    },
  },
  scene: [Boot, Preloader, Prologue, Plot],
};

export default new Game(config);
