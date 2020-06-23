class Scene1 extends Phaser.Scene {

	constructor() {
		super("bootGame");
	}

	preload() {
		this.load.image("ludoboard", "./img/ludoboard.png");
		this.load.image("dashboard", "./img/dashboard.png");

		this.load.image("red", "./img/Red.svg");
		this.load.image("blue", "./img/Blue.svg");
		this.load.image("green", "./img/Green.svg");
		this.load.image("yellow", "./img/Yellow.svg");

		this.load.image("dice1", "./img/Dice1.png");
		this.load.image("dice2", "./img/Dice2.png");
		this.load.image("dice3", "./img/Dice3.png");
		this.load.image("dice4", "./img/Dice4.png");
		this.load.image("dice5", "./img/Dice5.png");
		this.load.image("dice6", "./img/Dice6.png");

		this.load.image("score0", "./img/Score0.png");
		this.load.image("score1", "./img/Score1.png");
		this.load.image("score2", "./img/Score2.png");
		this.load.image("score3", "./img/Score3.png");

	}

	create() {
		this.add.text(20, 20, "Loading Game...", {
			font:"16px Arial", 
			fill:"white"
		});
		this.scene.start("playGame");
	}

}