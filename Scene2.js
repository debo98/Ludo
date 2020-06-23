class Scene2 extends Phaser.Scene {
	
	/********************************************************
						 CONSTRUCTOR 
	********************************************************/
	constructor() {
		super("playGame");
	}

	/********************************************************
						 CREATE
	********************************************************/
	create() {

		this.layout();
		this.startofgame();
		this.setinitData();
		this.setInteractiveforall();
		
	}

	layout() {
		this.ludoboard = this.add.image(0, 0, "ludoboard");
		this.ludoboard.setOrigin(0, 0);
		this.dashboard = this.add.image(300, 0, "dashboard");
		this.dashboard.setOrigin(0, 0);
	}

	startofgame() {
		this.red1 = this.add.image(45, 45, "red");
		this.red2 = this.add.image(80, 45, "red");
		this.red3 = this.add.image(45, 80, "red");
		this.red4 = this.add.image(80, 80, "red");

		this.blue1 = this.add.image(45, 218, "blue");
		this.blue2 = this.add.image(80, 218, "blue");
		this.blue3 = this.add.image(45, 253, "blue");
		this.blue4 = this.add.image(80, 253, "blue");

		this.green1 = this.add.image(218, 45, "green");
		this.green2 = this.add.image(218, 80, "green");
		this.green3 = this.add.image(253, 45, "green");
		this.green4 = this.add.image(253, 80, "green");

		this.yellow1 = this.add.image(218, 218, "yellow");
		this.yellow2 = this.add.image(218, 253, "yellow");
		this.yellow3 = this.add.image(253, 218, "yellow");
		this.yellow4 = this.add.image(253, 253 , "yellow");
	}

	setinitData() {

		// RED

		this.red1.setData("color", "red");
		this.red2.setData("color", "red");
		this.red3.setData("color", "red");
		this.red4.setData("color", "red");

		this.red1.setData("pos", 0);
		this.red2.setData("pos", 0);
		this.red3.setData("pos", 0);
		this.red4.setData("pos", 0);



		// BLUE

		this.blue1.setData("color", "blue");
		this.blue2.setData("color", "blue");
		this.blue3.setData("color", "blue");
		this.blue4.setData("color", "blue");

		this.blue1.setData("pos", 0);
		this.blue2.setData("pos", 0);
		this.blue3.setData("pos", 0);
		this.blue4.setData("pos", 0);



		// GREEN

		this.green1.setData("color", "green");
		this.green2.setData("color", "green");
		this.green3.setData("color", "green");
		this.green4.setData("color", "green");

		this.green1.setData("pos", 0);
		this.green2.setData("pos", 0);
		this.green3.setData("pos", 0);
		this.green4.setData("pos", 0);



		// YELLOW

		this.yellow1.setData("color", "yellow");
		this.yellow2.setData("color", "yellow");
		this.yellow3.setData("color", "yellow");
		this.yellow4.setData("color", "yellow");

		this.yellow1.setData("pos", 0);
		this.yellow2.setData("pos", 0);
		this.yellow3.setData("pos", 0);
		this.yellow4.setData("pos", 0);
	}

	setInteractiveforall() {
		this.red1.setInteractive();
		this.red2.setInteractive();
		this.red3.setInteractive();
		this.red4.setInteractive();

		this.blue1.setInteractive();
		this.blue2.setInteractive();
		this.blue3.setInteractive();
		this.blue4.setInteractive();

		this.green1.setInteractive();
		this.green2.setInteractive();
		this.green3.setInteractive();
		this.green4.setInteractive();

		this.yellow1.setInteractive();
		this.yellow2.setInteractive();
		this.yellow3.setInteractive();
		this.yellow4.setInteractive();

		this.input.on('gameobjectdown', this.move, this);

	}


	move(pointer, gameObject){
		
		console.log(gameObject.getData("color"), " ", gameObject.getData("pos"));
		if(1){			// Check if can move
			
			// Square width: 19.1
			// First square: (16.8, 16.8)

			// First Move
			if(gameObject.getData("pos") == 0){
				switch(gameObject.getData("color")){
					case "red":
						gameObject.x = 35.9;
						gameObject.y = 131.4;
						break;
					case "blue":
						gameObject.x = 131.4;
						gameObject.y = 265.1;
						break;
					case "green":
						gameObject.x = 169.6;
						gameObject.y = 35.9;
						break;
					case "yellow":
						gameObject.x = 265.1;
						gameObject.y = 169.6;
						break;
				}
				gameObject.setData("pos", gameObject.getData("pos") + 1);
				// continue;
			}

			// Stretch 1
			// if()


		}
	}


	/********************************************************
						 UPDATE 
	********************************************************/

	update() {

	}


}