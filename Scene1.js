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
	}

	create() {
		this.add.text(20, 20, "Loading Game...", {
			font:"16px Arial", 
			fill:"white"
		});
		this.scene.start("playGame");
	}

}