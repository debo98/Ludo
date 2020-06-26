class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("ludoboard", "./src/assets/ludoboard.png");
        this.load.image("dashboard", "./src/assets/dashboard.png");

        this.load.image("red", "./src/assets/Red.svg");
        this.load.image("blue", "./src/assets/Blue.svg");
        this.load.image("green", "./src/assets/Green.svg");
        this.load.image("yellow", "./src/assets/Yellow.svg");

        this.load.image("dice1", "./src/assets/Dice1.png");
        this.load.image("dice2", "./src/assets/Dice2.png");
        this.load.image("dice3", "./src/assets/Dice3.png");
        this.load.image("dice4", "./src/assets/Dice4.png");
        this.load.image("dice5", "./src/assets/Dice5.png");
        this.load.image("dice6", "./src/assets/Dice6.png");

        this.load.image("score0", "./src/assets/Score0.png");
        this.load.image("score1", "./src/assets/Score1.png");
        this.load.image("score2", "./src/assets/Score2.png");
        this.load.image("score3", "./src/assets/Score3.png");

    }

    create() {
        this.add.text(20, 20, "Loading Game...", {
            font: "16px Arial",
            fill: "white"
        });
        this.scene.start("playGame");
    }

}