class Scene2 extends Phaser.Scene {
	
	/********************************************************
						 CONSTRUCTOR 
	********************************************************/
	constructor() {
		super("playGame");
		this.dice_roll = 14;
		this.turn = 0; // 0 -> Red, 1 -> Blue, 2 -> Green, 3 -> Yellow
		this.redScore = 0;
		this.blueScore = 0;
		this.greenScore = 0;
		this.yellowScore = 0;
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
		this.ludoboard = this.add.image(0, 0, "ludoboard").setScale(scaling_parameter);
		this.ludoboard.setOrigin(0, 0);
		this.dashboard = this.add.image(300*scaling_parameter, 0, "dashboard").setScale(scaling_parameter);;
		this.dashboard.setOrigin(0, 0);
	}

	startofgame() {
		this.red1 = this.add.image(45*scaling_parameter, 45*scaling_parameter, "red").setScale(scaling_parameter);
		this.red2 = this.add.image(80*scaling_parameter, 45*scaling_parameter, "red").setScale(scaling_parameter);
		this.red3 = this.add.image(45*scaling_parameter, 80*scaling_parameter, "red").setScale(scaling_parameter);
		this.red4 = this.add.image(80*scaling_parameter, 80*scaling_parameter, "red").setScale(scaling_parameter);

		this.blue1 = this.add.image(45*scaling_parameter, 218*scaling_parameter, "blue").setScale(scaling_parameter);
		this.blue2 = this.add.image(80*scaling_parameter, 218*scaling_parameter, "blue").setScale(scaling_parameter);
		this.blue3 = this.add.image(45*scaling_parameter, 253*scaling_parameter, "blue").setScale(scaling_parameter);
		this.blue4 = this.add.image(80*scaling_parameter, 253*scaling_parameter, "blue").setScale(scaling_parameter);

		this.green1 = this.add.image(218*scaling_parameter, 45*scaling_parameter, "green").setScale(scaling_parameter);
		this.green2 = this.add.image(218*scaling_parameter, 80*scaling_parameter, "green").setScale(scaling_parameter);
		this.green3 = this.add.image(253*scaling_parameter, 45*scaling_parameter, "green").setScale(scaling_parameter);
		this.green4 = this.add.image(253*scaling_parameter, 80*scaling_parameter, "green").setScale(scaling_parameter);

		this.yellow1 = this.add.image(218*scaling_parameter, 218*scaling_parameter, "yellow").setScale(scaling_parameter);
		this.yellow2 = this.add.image(218*scaling_parameter, 253*scaling_parameter, "yellow").setScale(scaling_parameter);
		this.yellow3 = this.add.image(253*scaling_parameter, 218*scaling_parameter, "yellow").setScale(scaling_parameter);
		this.yellow4 = this.add.image(253*scaling_parameter, 253*scaling_parameter , "yellow").setScale(scaling_parameter);
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
		
		console.log(gameObject.getData("color"), " ", gameObject.getData("pos"), " ", this.dice_roll);
		if(1){			// Check if can move
			
			var pos = gameObject.getData("pos");
			// First Move
			if(pos == 0){
				switch(gameObject.getData("color")){
					case "red": pos = 1; break;
					case "blue": pos = 40; break;
					case "green": pos = 14; break;
					case "yellow": pos = 27; break;
				}
			}
			else if(gameObject.getData("color") == "red" && pos + this.dice_roll > 51){
				if(pos <= 51){
					pos += this.dice_roll + 1;
				}
				else if(pos + this.dice_roll < 59){
					pos += this.dice_roll;
				}
				if(pos == 58){
					this.redScore += 1;
					if(this.redScore == 4){
						this.scene.start("gameOver", {
							redScore: this.redScore, 
							blueScore: this.blueScore, 
							greenScore: this.greenScore, 
							yellowScore: this.yellowScore
						});
						console.log("RED WINS!!!!!!!!!!!!!!");
					}
					console.log("Red scored");
					gameObject.destroy();
				}
			}
			else if(gameObject.getData("color") == "blue" && (pos <= 38 || pos >= 68) && pos + this.dice_roll > 38){
				if(pos <= 38){
					pos += this.dice_roll + 29;
				}
				else if(pos + this.dice_roll < 74){
					pos += this.dice_roll;
				}
				if(pos == 73){
					this.blueScore += 1;
					if(this.blueScore == 4){
						this.scene.start("gameOver", {
							redScore: this.redScore, 
							blueScore: this.blueScore, 
							greenScore: this.greenScore, 
							yellowScore: this.yellowScore
						});
						console.log("BLUE WINS!!!!!!!!!!!!!!");
					}
					console.log("Blue scored");
					gameObject.destroy();
				}
			}
			else if(gameObject.getData("color") == "green" && (pos <= 12 || pos >= 58) && pos + this.dice_roll > 12){
				if(pos <= 12){
					pos += this.dice_roll + 45;
				}
				else if(pos + this.dice_roll < 64){
					pos += this.dice_roll;
				}
				if(pos == 63){
					this.greenScore += 1;
					if(this.greenScore == 4){
						this.scene.start("gameOver", {
							redScore: this.redScore, 
							blueScore: this.blueScore, 
							greenScore: this.greenScore, 
							yellowScore: this.yellowScore
						});
						console.log("GREEN WINS!!!!!!!!!!!!!!");
					}
					console.log("Green scored");
					gameObject.destroy();
				}
			}
			else if(gameObject.getData("color") == "yellow" && (pos <=25 || pos >= 63) && pos + this.dice_roll > 25){
				if(pos <= 25){
					pos += this.dice_roll + 37;
				}
				else if(pos + this.dice_roll < 69){
					pos += this.dice_roll;
				}
				if(pos == 68){
					this.yellowScore += 1;
					if(this.yellowScore == 4){
						this.scene.start("gameOver", {
							redScore: this.redScore, 
							blueScore: this.blueScore, 
							greenScore: this.greenScore, 
							yellowScore: this.yellowScore
						});
						console.log("YELLOW WINS!!!!!!!!!!!!!!");
					}
					console.log("Yellow scored");
					gameObject.destroy();
				}
			}
			else{
				pos += this.dice_roll;
				if(pos > 52){
					pos -= 52;
				}
			}

			// if pos is 73, dont show? gives console error o.w. Nothing significant
			gameObject.setData("pos", pos);
			[gameObject.x, gameObject.y] = this.get_new_position(pos);
			[gameObject.x, gameObject.y] = [scaling_parameter * gameObject.x, scaling_parameter * gameObject.y]
		}
	}

	get_new_position(location){
		// Square width: 19.1
		// First square: (16.8, 16.8)
		
		var mapping = new Map();
		mapping.set(1, [35.9, 131.4]);
		mapping.set(2, [55.0, 131.4]);
		mapping.set(3, [74.1, 131.4]);
		mapping.set(4, [93.2, 131.4]);
		mapping.set(5, [112.3, 131.4]);
		mapping.set(6, [131.4, 112.3]);
		mapping.set(7, [131.4, 93.2]);
		mapping.set(8, [131.4, 74.1]);
		mapping.set(9, [131.4, 55.0]);
		mapping.set(10, [131.4, 35.9]);
		mapping.set(11, [131.4, 16.8]);
		mapping.set(12, [150.5, 16.8]);
		mapping.set(13, [169.6, 16.8]);
		mapping.set(14, [169.6, 35.9]);
		mapping.set(15, [169.6, 55.0]);
		mapping.set(16, [169.6, 74.1]);
		mapping.set(17, [169.6, 93.2]);
		mapping.set(18, [169.6, 112.3]);
		mapping.set(19, [188.7, 131.4]);
		mapping.set(20, [207.8, 131.4]);
		mapping.set(21, [226.9, 131.4]);
		mapping.set(22, [246.0, 131.4]);
		mapping.set(23, [265.1, 131.4]);
		mapping.set(24, [285.2, 131.4]);
		mapping.set(25, [285.2, 150.5]);
		mapping.set(26, [285.2, 169.6]);
		mapping.set(27, [265.1, 169.6]);
		mapping.set(28, [246.0, 169.6]);
		mapping.set(29, [226.9, 169.6]);
		mapping.set(30, [207.8, 169.6]);
		mapping.set(31, [188.7, 169.6]);
		mapping.set(32, [169.6, 188.7]);
		mapping.set(33, [169.6, 207.8]);
		mapping.set(34, [169.6, 226.9]);
		mapping.set(35, [169.6, 246.0]);
		mapping.set(36, [169.6, 265.1]);
		mapping.set(37, [169.6, 285.2]);
		mapping.set(38, [150.5, 285.2]);
		mapping.set(39, [131.4, 285.2]);
		mapping.set(40, [131.4, 265.1]);
		mapping.set(41, [131.4, 246.0]);
		mapping.set(42, [131.4, 226.9]);
		mapping.set(43, [131.4, 207.8]);
		mapping.set(44, [131.4, 188.7]);
		mapping.set(45, [112.3, 169.6]);
		mapping.set(46, [93.2, 169.6]);
		mapping.set(47, [74.1, 169.6]);
		mapping.set(48, [55.0, 169.6]);
		mapping.set(49, [35.9, 169.6]);
		mapping.set(50, [16.8, 169.6]);
		mapping.set(51, [16.8, 150.5]);
		mapping.set(52, [16.8, 131.4]);
		mapping.set(53, [35.9, 150.5]);
		mapping.set(54, [55.0, 150.5]);
		mapping.set(55, [74.1, 150.5]);
		mapping.set(56, [93.2, 150.5]);
		mapping.set(57, [112.3, 150.5]);
		mapping.set(58, [150.5, 35.9]);
		mapping.set(59, [150.5, 55.0]);
		mapping.set(60, [150.5, 74.1]);
		mapping.set(61, [150.5, 93.2]);
		mapping.set(62, [150.5, 112.3]);
		mapping.set(63, [265.1, 150.5]);
		mapping.set(64, [246.0, 150.5]);
		mapping.set(65, [226.9, 150.5]);
		mapping.set(66, [207.8, 150.5]);
		mapping.set(67, [188.7, 150.5]);
		mapping.set(68, [150.5, 265.1]);
		mapping.set(69, [150.5, 246.0]);
		mapping.set(70, [150.5, 226.9]);
		mapping.set(71, [150.5, 207.8]);
		mapping.set(72, [150.5, 188.7]);

		return mapping.get(location);
	}


	/********************************************************
						 UPDATE 
	********************************************************/

	update() {

	}


}