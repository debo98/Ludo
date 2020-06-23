class Scene2 extends Phaser.Scene {
	
	/********************************************************
						 CONSTRUCTOR 
	********************************************************/
	constructor() {
		super("playGame");
		
		this.turn = "red";
		this.change_turn = true;
		
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
		this.setpieces();
		this.setdice();
		this.setScoreBoard();
		this.setinitData();
		this.setInteractiveforall();
		
	}

	layout() {
		this.ludoboard = this.add.image(0, 0, "ludoboard").setScale(scaling_parameter);
		this.ludoboard.setOrigin(0, 0);
		this.dashboard = this.add.image(300 * scaling_parameter, 0, "dashboard").setScale(scaling_parameter);;
		this.dashboard.setOrigin(0, 0);
	}

	setpieces() {
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

	setdice() {
		this.dice1 = this.add.image(365 * scaling_parameter, 2 * scaling_parameter, "dice1").setScale(scaling_parameter);
		this.dice1.setOrigin(0, 0);
		this.dice1.visible = false;
		this.dice1.setData("facevalue", 1);
		this.dice1.setData("type", "dice");

		this.dice2 = this.add.image(365 * scaling_parameter, 2 * scaling_parameter, "dice2").setScale(scaling_parameter);
		this.dice2.setOrigin(0, 0);
		this.dice2.visible = false;
		this.dice2.setData("facevalue", 2);
		this.dice2.setData("type", "dice");

		this.dice3 = this.add.image(365 * scaling_parameter, 2 * scaling_parameter, "dice3").setScale(scaling_parameter);
		this.dice3.setOrigin(0, 0);
		this.dice3.visible = false;
		this.dice3.setData("facevalue", 3);
		this.dice3.setData("type", "dice");
		
		this.dice4 = this.add.image(365 * scaling_parameter, 2 * scaling_parameter, "dice4").setScale(scaling_parameter);
		this.dice4.setOrigin(0, 0);
		this.dice4.visible = false;
		this.dice4.setData("facevalue", 4);
		this.dice4.setData("type", "dice");

		this.dice5 = this.add.image(365 * scaling_parameter, 2 * scaling_parameter, "dice5").setScale(scaling_parameter);
		this.dice5.setOrigin(0, 0);
		this.dice5.visible = false;
		this.dice5.setData("facevalue", 5);
		this.dice5.setData("type", "dice");

		this.dice6 = this.add.image(365 * scaling_parameter, 2 * scaling_parameter, "dice6").setScale(scaling_parameter);
		this.dice6.setOrigin(0, 0);
		this.dice6.visible = true;
		this.dice6.setData("facevalue", 6);
		this.dice6.setData("type", "dice");

		this.dice = this.dice6;
	}

	setScoreBoard() {
		
		// RED

		this.score0_red = this.add.image(300 * scaling_parameter, 110 * scaling_parameter, "score0").setScale(scaling_parameter);
		this.score0_red.setOrigin(0, 0);
		this.score0_red.visible = true;
		this.score1_red = this.add.image(300 * scaling_parameter, 110 * scaling_parameter, "score1").setScale(scaling_parameter);
		this.score1_red.setOrigin(0, 0);
		this.score1_red.visible = false;
		this.score2_red = this.add.image(300 * scaling_parameter, 110 * scaling_parameter, "score2").setScale(scaling_parameter);
		this.score2_red.setOrigin(0, 0);
		this.score2_red.visible = false;
		this.score3_red = this.add.image(300 * scaling_parameter, 110 * scaling_parameter, "score3").setScale(scaling_parameter);
		this.score3_red.setOrigin(0, 0);
		this.score3_red.visible = false;

		// BLUE

		this.score0_blue = this.add.image(330 * scaling_parameter, 110 * scaling_parameter, "score0").setScale(scaling_parameter);
		this.score0_blue.setOrigin(0, 0);
		this.score0_blue.visible = true;
		this.score1_blue = this.add.image(330 * scaling_parameter, 110 * scaling_parameter, "score1").setScale(scaling_parameter);
		this.score1_blue.setOrigin(0, 0);
		this.score1_blue.visible = false;
		this.score2_blue = this.add.image(330 * scaling_parameter, 110 * scaling_parameter, "score2").setScale(scaling_parameter);
		this.score2_blue.setOrigin(0, 0);
		this.score2_blue.visible = false;
		this.score3_blue = this.add.image(330 * scaling_parameter, 110 * scaling_parameter, "score3").setScale(scaling_parameter);
		this.score3_blue.setOrigin(0, 0);
		this.score3_blue.visible = false;

		// GREEN

		this.score0_green = this.add.image(360 * scaling_parameter, 110 * scaling_parameter, "score0").setScale(scaling_parameter);
		this.score0_green.setOrigin(0, 0);
		this.score0_green.visible = true;
		this.score1_green = this.add.image(360 * scaling_parameter, 110 * scaling_parameter, "score1").setScale(scaling_parameter);
		this.score1_green.setOrigin(0, 0);
		this.score1_green.visible = false;
		this.score2_green = this.add.image(360 * scaling_parameter, 110 * scaling_parameter, "score2").setScale(scaling_parameter);
		this.score2_green.setOrigin(0, 0);
		this.score2_green.visible = false;
		this.score3_green = this.add.image(360 * scaling_parameter, 110 * scaling_parameter, "score3").setScale(scaling_parameter);
		this.score3_green.setOrigin(0, 0);
		this.score3_green.visible = false;

		// YELLOW

		this.score0_yellow = this.add.image(390 * scaling_parameter, 110 * scaling_parameter, "score0").setScale(scaling_parameter);
		this.score0_yellow.setOrigin(0, 0);
		this.score0_yellow.visible = true;
		this.score1_yellow = this.add.image(390 * scaling_parameter, 110 * scaling_parameter, "score1").setScale(scaling_parameter);
		this.score1_yellow.setOrigin(0, 0);
		this.score1_yellow.visible = false;
		this.score2_yellow = this.add.image(390 * scaling_parameter, 110 * scaling_parameter, "score2").setScale(scaling_parameter);
		this.score2_yellow.setOrigin(0, 0);
		this.score2_yellow.visible = false;
		this.score3_yellow = this.add.image(390 * scaling_parameter, 110 * scaling_parameter, "score3").setScale(scaling_parameter);
		this.score3_yellow.setOrigin(0, 0);
		this.score3_yellow.visible = false;

	}

	setinitData() {

		//DICE
		this.dice.setData("active", true);

		// RED

		this.red1.setData("type", "piece");
		this.red2.setData("type", "piece");
		this.red3.setData("type", "piece");
		this.red4.setData("type", "piece");

		this.red1.setData("color", "red");
		this.red2.setData("color", "red");
		this.red3.setData("color", "red");
		this.red4.setData("color", "red");

		this.red1.setData("pos", 0);
		this.red2.setData("pos", 0);
		this.red3.setData("pos", 0);
		this.red4.setData("pos", 0);



		// BLUE

		this.blue1.setData("type", "piece");
		this.blue2.setData("type", "piece");
		this.blue3.setData("type", "piece");
		this.blue4.setData("type", "piece");

		this.blue1.setData("color", "blue");
		this.blue2.setData("color", "blue");
		this.blue3.setData("color", "blue");
		this.blue4.setData("color", "blue");

		this.blue1.setData("pos", 0);
		this.blue2.setData("pos", 0);
		this.blue3.setData("pos", 0);
		this.blue4.setData("pos", 0);



		// GREEN

		this.green1.setData("type", "piece");
		this.green2.setData("type", "piece");
		this.green3.setData("type", "piece");
		this.green4.setData("type", "piece");

		this.green1.setData("color", "green");
		this.green2.setData("color", "green");
		this.green3.setData("color", "green");
		this.green4.setData("color", "green");

		this.green1.setData("pos", 0);
		this.green2.setData("pos", 0);
		this.green3.setData("pos", 0);
		this.green4.setData("pos", 0);



		// YELLOW

		this.yellow1.setData("type", "piece");
		this.yellow2.setData("type", "piece");
		this.yellow3.setData("type", "piece");
		this.yellow4.setData("type", "piece");

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
		this.dice1.setInteractive();
		this.dice2.setInteractive();
		this.dice3.setInteractive();
		this.dice4.setInteractive();
		this.dice5.setInteractive();
		this.dice6.setInteractive();

		this.dice1.input.enable = false;
		this.dice2.input.enable = false;
		this.dice3.input.enable = false;
		this.dice4.input.enable = false;
		this.dice5.input.enable = false;
		this.dice6.input.enable = true;

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


	move(pointer, gameObject) {

		if(gameObject.getData("type") == "dice" && this.dice.getData("active") == true){
			var dice_roll = Phaser.Math.Between(1, 6);
			this.dice.input.enable = false;
			this.dice.visible = false;
			switch(dice_roll){
				case 1: this.dice = this.dice1; this.change_turn = true; break;
				case 2: this.dice = this.dice2; this.change_turn = true; break;
				case 3: this.dice = this.dice3; this.change_turn = true; break;
				case 4: this.dice = this.dice4; this.change_turn = true; break;
				case 5: this.dice = this.dice5; this.change_turn = true; break;
				case 6: this.dice = this.dice6; this.change_turn = false; break;
			}
			this.dice.input.enable = true;
			this.dice.visible = true;
			this.dice.setData("active", false);

			// TODO: IF CANNOT MOVE, GO TO DICE ROLL
			// TODO: IF CLICKED WRONG PIECE, DO NOT SKIP TURN
			// TODO: 2 PIECES TOGETHER SHOULD BE CONSIDERED SAFE
			// TODO: CANNOT CLICK PIECES IF OTHER COLORS ARE THERE. Y > G > B > R
			// TODO: BLUE ENTERING HOME (LAST) PHASE GETS EXTRA TURN FOR SOME REASON

			console.log("Dice was rolled. Value: ", this.dice.getData("facevalue"), " Turn: ", this.turn)
		}
		
		else if(gameObject.getData("type") == "piece"){
			if(this.dice.getData("active") == false && gameObject.getData("color") == this.turn){
				var pos = this.move_piece(gameObject);
				if(pos > 0 && pos < 73){
					gameObject.setData("pos", pos);
					[gameObject.x, gameObject.y] = this.get_new_position(pos);
					[gameObject.x, gameObject.y] = [scaling_parameter * gameObject.x, scaling_parameter * gameObject.y]
				}
				this.dice.setData("active", true);
				if(this.change_turn == true){
					switch(this.turn){
						case "red": this.turn = "blue"; break;
						case "blue": this.turn = "green"; break;
						case "green": this.turn = "yellow"; break;
						case "yellow": this.turn = "red"; break;
					}
				}
			}
		}
		
	}



	move_piece(gameObject) {
		var pos = gameObject.getData("pos");
		if(pos == 0 && this.dice.getData("facevalue") == 6){
			switch(gameObject.getData("color")) {
				case "red": pos = 1; break;
				case "blue": pos = 40; break;
				case "green": pos = 14; break;
				case "yellow": pos = 27; break;
			}
		}

		else if(gameObject.getData("color") == "red" && pos + this.dice.getData("facevalue") > 51) {
			if(pos <= 51) {
				pos += this.dice.getData("facevalue") + 1;
			}
			else if(pos + this.dice.getData("facevalue") < 59) {
				pos += this.dice.getData("facevalue");
			}
			if(pos == 58) {
				this.redScore += 1;
				this.change_turn = false;
				if(this.redScore == 4){
					this.scene.start("gameOver", {
						redScore: this.redScore, 
						blueScore: this.blueScore, 
						greenScore: this.greenScore, 
						yellowScore: this.yellowScore
					});
					console.log("RED WINS!!!!!!!!!!!!!!");
				}
				switch(this.redScore){
					case 1: this.score0_red.visible = false; this.score1_red.visible = true; break;
					case 2: this.score1_red.visible = false; this.score2_red.visible = true; break;
					case 3: this.score2_red.visible = false; this.score3_red.visible = true; break;
				}
				console.log("Red scored");
				gameObject.destroy();
			}
		}

		else if(gameObject.getData("color") == "blue" && (pos <= 38 || pos >= 68) && pos + this.dice.getData("facevalue") > 38) {
			if(pos <= 38) {
				pos += this.dice.getData("facevalue") + 29;
			}
			else if(pos + this.dice.getData("facevalue") < 74) {
				pos += this.dice.getData("facevalue");
			}
			if(pos == 73) {
				this.blueScore += 1;
				this.change_turn = false;
				if(this.blueScore == 4) {
					this.scene.start("gameOver", {
						redScore: this.redScore, 
						blueScore: this.blueScore, 
						greenScore: this.greenScore, 
						yellowScore: this.yellowScore
					});
					console.log("BLUE WINS!!!!!!!!!!!!!!");
				}
				switch(this.blueScore){
					case 1: this.score0_blue.visible = false; this.score1_blue.visible = true; break;
					case 2: this.score1_blue.visible = false; this.score2_blue.visible = true; break;
					case 3: this.score2_blue.visible = false; this.score3_blue.visible = true; break;
				}
				console.log("Blue scored");
				gameObject.destroy();
			}
		}

		else if(gameObject.getData("color") == "green" && (pos <= 12 || pos >= 58) && pos + this.dice.getData("facevalue") > 12) {
			if(pos <= 12) {
				pos += this.dice.getData("facevalue") + 45;
			}
			else if(pos + this.dice.getData("facevalue") < 64) {
				pos += this.dice.getData("facevalue");
			}
			if(pos == 63){
				this.greenScore += 1;
				this.change_turn = false;
				if(this.greenScore == 4) {
					this.scene.start("gameOver", {
						redScore: this.redScore, 
						blueScore: this.blueScore, 
						greenScore: this.greenScore, 
						yellowScore: this.yellowScore
					});
					console.log("GREEN WINS!!!!!!!!!!!!!!");
				}
				switch(this.greenScore){
					case 1: this.score0_green.visible = false; this.score1_green.visible = true; break;
					case 2: this.score1_green.visible = false; this.score2_green.visible = true; break;
					case 3: this.score2_green.visible = false; this.score3_green.visible = true; break;
				}
				console.log("Green scored");
				gameObject.destroy();
			}
		}

		else if(gameObject.getData("color") == "yellow" && (pos <=25 || pos >= 63) && pos + this.dice.getData("facevalue") > 25){
			if(pos <= 25){
				pos += this.dice.getData("facevalue") + 37;
			}
			else if(pos + this.dice.getData("facevalue") < 69){
				pos += this.dice.getData("facevalue");
			}
			if(pos == 68){
				this.yellowScore += 1;
				this.change_turn = false;
				if(this.yellowScore == 4){
					this.scene.start("gameOver", {
						redScore: this.redScore, 
						blueScore: this.blueScore, 
						greenScore: this.greenScore, 
						yellowScore: this.yellowScore
					});
					console.log("YELLOW WINS!!!!!!!!!!!!!!");
				}
				switch(this.yellowScore){
					case 1: this.score0_yellow.visible = false; this.score1_yellow.visible = true; break;
					case 2: this.score1_yellow.visible = false; this.score2_yellow.visible = true; break;
					case 3: this.score2_yellow.visible = false; this.score3_yellow.visible = true; break;
				}
				console.log("Yellow scored");
				gameObject.destroy();
			}
		}

		else if(pos > 0) {
			pos += this.dice.getData("facevalue");
			if(pos > 52) {
				pos -= 52;
			}
		}

		this.check_cut(gameObject, pos);

		return pos;
	}

	get_new_position(location) {
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

	check_cut(gameObject, location) {
		if(this.is_safe(location) == false){

			// RED

			if(gameObject.getData("color") == "red") {

				if(this.blue1.getData("pos") == location){
					this.blue1.setData("pos", 0);
					this.blue1.x = 45*scaling_parameter;
					this.blue1.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue2.getData("pos") == location){
					this.blue2.setData("pos", 0);
					this.blue2.x = 80*scaling_parameter;
					this.blue2.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue3.getData("pos") == location){
					this.blue3.setData("pos", 0);
					this.blue3.x = 45*scaling_parameter
					this.blue3.y = 253*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue4.getData("pos") == location){
					this.blue4.setData("pos", 0);
					this.blue4.x = 80*scaling_parameter;
					this.blue4.y = 253*scaling_parameter;
					this.change_turn = false;
				}

				if(this.green1.getData("pos") == location){
					this.green1.setData("pos", 0);
					this.green1.x = 218*scaling_parameter;
					this.green1.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green2.getData("pos") == location){
					this.green2.setData("pos", 0);
					this.green2.x = 218*scaling_parameter;
					this.green2.y = 80*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green3.getData("pos") == location){
					this.green3.setData("pos", 0);
					this.green3.x = 253*scaling_parameter
					this.green3.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green4.getData("pos") == location){
					this.green4.setData("pos", 0);
					this.green4.x = 253*scaling_parameter;
					this.green4.y = 80*scaling_parameter;
					this.change_turn = false;
				}

				if(this.yellow1.getData("pos") == location){
					this.yellow1.setData("pos", 0);
					this.yellow1.x = 218*scaling_parameter;
					this.yellow1.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow2.getData("pos") == location){
					this.yellow2.setData("pos", 0);
					this.yellow2.x = 218*scaling_parameter;
					this.yellow2.y = 252*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow3.getData("pos") == location){
					this.yellow3.setData("pos", 0);
					this.yellow3.x = 253*scaling_parameter
					this.yellow3.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow4.getData("pos") == location){
					this.yellow4.setData("pos", 0);
					this.yellow4.x = 253*scaling_parameter;
					this.yellow4.y = 253*scaling_parameter;
					this.change_turn = false;
				}

			}

			// BLUE

			else if(gameObject.getData("color") == "blue") {

				if(this.red1.getData("pos") == location){
					this.red1.setData("pos", 0);
					this.red1.x = 45*scaling_parameter;
					this.red1.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red2.getData("pos") == location){
					this.red2.setData("pos", 0);
					this.red2.x = 45*scaling_parameter;
					this.red2.y = 80*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red3.getData("pos") == location){
					this.red3.setData("pos", 0);
					this.red3.x = 80*scaling_parameter
					this.red3.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red4.getData("pos") == location){
					this.red4.setData("pos", 0);
					this.red4.x = 80*scaling_parameter;
					this.red4.y = 80*scaling_parameter;
					this.change_turn = false;
				}

				if(this.green1.getData("pos") == location){
					this.green1.setData("pos", 0);
					this.green1.x = 218*scaling_parameter;
					this.green1.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green2.getData("pos") == location){
					this.green2.setData("pos", 0);
					this.green2.x = 218*scaling_parameter;
					this.green2.y = 80*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green3.getData("pos") == location){
					this.green3.setData("pos", 0);
					this.green3.x = 253*scaling_parameter
					this.green3.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green4.getData("pos") == location){
					this.green4.setData("pos", 0);
					this.green4.x = 253*scaling_parameter;
					this.green4.y = 80*scaling_parameter;
					this.change_turn = false;
				}

				if(this.yellow1.getData("pos") == location){
					this.yellow1.setData("pos", 0);
					this.yellow1.x = 218*scaling_parameter;
					this.yellow1.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow2.getData("pos") == location){
					this.yellow2.setData("pos", 0);
					this.yellow2.x = 218*scaling_parameter;
					this.yellow2.y = 252*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow3.getData("pos") == location){
					this.yellow3.setData("pos", 0);
					this.yellow3.x = 253*scaling_parameter
					this.yellow3.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow4.getData("pos") == location){
					this.yellow4.setData("pos", 0);
					this.yellow4.x = 253*scaling_parameter;
					this.yellow4.y = 253*scaling_parameter;
					this.change_turn = false;
				}

			}

			// GREEN

			else if(gameObject.getData("color") == "green") {

				if(this.red1.getData("pos") == location){
					this.red1.setData("pos", 0);
					this.red1.x = 45*scaling_parameter;
					this.red1.y = 45*scaling_parameter;
			
			this.change_turn = false;	}
				if(this.red2.getData("pos") == location){
					this.red2.setData("pos", 0);
					this.red2.x = 45*scaling_parameter;
					this.red2.y = 80*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red3.getData("pos") == location){
					this.red3.setData("pos", 0);
					this.red3.x = 80*scaling_parameter
					this.red3.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red4.getData("pos") == location){
					this.red4.setData("pos", 0);
					this.red4.x = 80*scaling_parameter;
					this.red4.y = 80*scaling_parameter;
					this.change_turn = false;
				}

				if(this.blue1.getData("pos") == location){
					this.blue1.setData("pos", 0);
					this.blue1.x = 45*scaling_parameter;
					this.blue1.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue2.getData("pos") == location){
					this.blue2.setData("pos", 0);
					this.blue2.x = 80*scaling_parameter;
					this.blue2.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue3.getData("pos") == location){
					this.blue3.setData("pos", 0);
					this.blue3.x = 45*scaling_parameter
					this.blue3.y = 253*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue4.getData("pos") == location){
					this.blue4.setData("pos", 0);
					this.blue4.x = 80*scaling_parameter;
					this.blue4.y = 253*scaling_parameter;
					this.change_turn = false;
				}

				if(this.yellow1.getData("pos") == location){
					this.yellow1.setData("pos", 0);
					this.yellow1.x = 218*scaling_parameter;
					this.yellow1.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow2.getData("pos") == location){
					this.yellow2.setData("pos", 0);
					this.yellow2.x = 218*scaling_parameter;
					this.yellow2.y = 252*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow3.getData("pos") == location){
					this.yellow3.setData("pos", 0);
					this.yellow3.x = 253*scaling_parameter
					this.yellow3.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.yellow4.getData("pos") == location){
					this.yellow4.setData("pos", 0);
					this.yellow4.x = 253*scaling_parameter;
					this.yellow4.y = 253*scaling_parameter;
					this.change_turn = false;
				}

			}

			// YELLOW

			else if(gameObject.getData("color") == "yellow") {

				if(this.red1.getData("pos") == location){
					this.red1.setData("pos", 0);
					this.red1.x = 45*scaling_parameter;
					this.red1.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red2.getData("pos") == location){
					this.red2.setData("pos", 0);
					this.red2.x = 45*scaling_parameter;
					this.red2.y = 80*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red3.getData("pos") == location){
					this.red3.setData("pos", 0);
					this.red3.x = 80*scaling_parameter
					this.red3.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.red4.getData("pos") == location){
					this.red4.setData("pos", 0);
					this.red4.x = 80*scaling_parameter;
					this.red4.y = 80*scaling_parameter;
					this.change_turn = false;
				}

				if(this.blue1.getData("pos") == location){
					this.blue1.setData("pos", 0);
					this.blue1.x = 45*scaling_parameter;
					this.blue1.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue2.getData("pos") == location){
					this.blue2.setData("pos", 0);
					this.blue2.x = 80*scaling_parameter;
					this.blue2.y = 218*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue3.getData("pos") == location){
					this.blue3.setData("pos", 0);
					this.blue3.x = 45*scaling_parameter
					this.blue3.y = 253*scaling_parameter;
					this.change_turn = false;
				}
				if(this.blue4.getData("pos") == location){
					this.blue4.setData("pos", 0);
					this.blue4.x = 80*scaling_parameter;
					this.blue4.y = 253*scaling_parameter;
					this.change_turn = false;
				}

				if(this.green1.getData("pos") == location){
					this.green1.setData("pos", 0);
					this.green1.x = 218*scaling_parameter;
					this.green1.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green2.getData("pos") == location){
					this.green2.setData("pos", 0);
					this.green2.x = 218*scaling_parameter;
					this.green2.y = 80*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green3.getData("pos") == location){
					this.green3.setData("pos", 0);
					this.green3.x = 253*scaling_parameter
					this.green3.y = 45*scaling_parameter;
					this.change_turn = false;
				}
				if(this.green4.getData("pos") == location){
					this.green4.setData("pos", 0);
					this.green4.x = 253*scaling_parameter;
					this.green4.y = 80*scaling_parameter;
					this.change_turn = false;
				}

			}



		}
	}

	is_safe(location) {
		switch(location){
			case 0: return true;
			case 1: return true;
			case 9: return true;
			case 14: return true;
			case 22: return true;
			case 27: return true;
			case 35: return true;
			case 40: return true;
			case 48: return true;
			case 73: return true;
			default: return false;
		}
	}

	/********************************************************
						 UPDATE 
	********************************************************/

	update() {

	}


}