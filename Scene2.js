class Scene2 extends Phaser.Scene {
	
	/********************************************************
						 CONSTRUCTOR 
	********************************************************/
	constructor() {
		super("playGame");
		
		this.turn = "red";
		this.turns_left = 1;
		this.consecutive_sixes = 0;
		
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
			this.turns_left -= 1;
			var dice_roll = Phaser.Math.Between(1, 6);
			this.dice.input.enable = false;
			this.dice.visible = false;
			switch(dice_roll){
				case 1: this.dice = this.dice1; this.consecutive_sixes = 0; break;
				case 2: this.dice = this.dice2; this.consecutive_sixes = 0; break;
				case 3: this.dice = this.dice3; this.consecutive_sixes = 0; break;
				case 4: this.dice = this.dice4; this.consecutive_sixes = 0; break;
				case 5: this.dice = this.dice5; this.consecutive_sixes = 0; break;
				case 6: this.dice = this.dice6; this.turns_left += 1; this.consecutive_sixes += 1; break;
			}

			console.log("Dice was rolled. Value: ", this.dice.getData("facevalue"), " Turn: ", this.turn)
			console.log(this.consecutive_sixes);

			if(this.consecutive_sixes == 3){
				this.consecutive_sixes = 0;
				this.turns_left = 0;
				this.switch_turns();
			}
			else{
				this.dice.setData("active", false);
				if(this.can_move() == false){
					this.switch_turns();		
				}
			}

			this.dice.input.enable = true;
			this.dice.visible = true;
		}
		
		else if(gameObject.getData("type") == "piece"){
			if(this.dice.getData("active") == false && gameObject.getData("color") == this.turn){
				var [status, pos] = this.move_piece(gameObject);
				if(pos > 0 && pos < 73){
					gameObject.setData("pos", pos);
					[gameObject.x, gameObject.y] = this.get_new_position(pos);
					[gameObject.x, gameObject.y] = [scaling_parameter * gameObject.x, scaling_parameter * gameObject.y]
				}
				if(status == "moved"){
					this.switch_turns();
				}

			}
		}
		
	}

	switch_turns() {
		this.dice.setData("active", true);	
		if(this.turns_left == 0){
			switch(this.turn){
				case "red": this.turn = "blue"; break;
				case "blue": this.turn = "yellow"; break;
				case "yellow": this.turn = "green"; break;
				case "green": this.turn = "red"; break;
			}
			this.turns_left = 1;
		}	
	}

	can_move() {
		var allpieces = [
			this.red1, this.red2, this.red3, this.red4,
			this.blue1, this.blue2, this.blue3, this.blue4,
			this.green1, this.green2, this.green3, this.green4,
			this.yellow1, this.yellow2, this.yellow3, this.yellow4
		];

		var cantmove = 0;
		for(var i=0; i < 16; i+=1) {
			if(allpieces[i].getData("color") == this.turn) {
				if(allpieces[i].getData("pos") == 0 && this.dice.getData("facevalue") != 6) {
					cantmove += 1;
					continue;
				}
				
				switch(this.turn){
					case "red": if(allpieces[i].getData("pos") + this.dice.getData("facevalue") > 58) cantmove += 1; break;
					case "blue": if(allpieces[i].getData("pos") + this.dice.getData("facevalue") > 73) cantmove += 1; break;
					case "green": if(allpieces[i].getData("pos") + this.dice.getData("facevalue") > 63) cantmove += 1; break;
					case "yellow": if(allpieces[i].getData("pos") + this.dice.getData("facevalue") > 68) cantmove += 1; break;
				}

			}
		}
		
		var score;
		switch(this.turn){
			case "red": score = this.redScore; break;
			case "blue": score = this.blueScore; break;
			case "green": score = this.greenScore; break;
			case "yellow": score = this.yellowScore; break;
		}

		if(score + cantmove < 4){
			return true;
		}
		else{
			return false;
		}

	}

	move_piece(gameObject) {
		var pos = gameObject.getData("pos");
		var inititalpos = pos;
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
				this.turns_left += 1;
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
				this.turns_left += 1;
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
				this.turns_left += 1;
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
				this.turns_left += 1;
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

		if(pos == inititalpos){
			return ["did not move", pos]; 
		}
		else{
			return ["moved", pos];
		}
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
		var allpieces = [
			this.red1, this.red2, this.red3, this.red4,
			this.blue1, this.blue2, this.blue3, this.blue4,
			this.green1, this.green2, this.green3, this.green4,
			this.yellow1, this.yellow2, this.yellow3, this.yellow4
		];
		var count_safe = 0;
		var cut_any = false;

		var safecolor = new Set([gameObject.getData("color")]);
		for(var i=0; i < 16; i+=1){
			if(allpieces[i].getData("pos") == location){
				for(var j = 0; j < 16; j+=1){
					if(allpieces[j].getData("pos")== location && i != j && allpieces[j].getData("color") == allpieces[i].getData("color")){
						safecolor.add(allpieces[i].getData("color"));
					}
				}
			}
		}

		for(var i=0; i < 16; i+=1){
			if(gameObject == allpieces[i]) {
				count_safe += 1;
				continue;
			}

			if(allpieces[i].getData("pos") == location) {
				if(this.is_safe(location) == true || safecolor.has(allpieces[i].getData("color")) == true) {
					count_safe += 1;
				}
				else{
					this.gohome(allpieces[i]);
					cut_any = true;
				}
			}

		}

		if(cut_any == true){
			this.turns_left += 1;
		}


		var row = Math.ceil(Math.sqrt(count_safe));
		var col = row;
		var firstsquare = this.get_new_position(location);
		if(location == 0){
			return;
		}
		firstsquare[0] -= 9.55;
		firstsquare[1] -= 9.55;
		firstsquare[0] += 19.1/(2*row);
		firstsquare[1] += 19.1/(2*col);
		var j = 0, k = 0;
		for(var i=0; i < 16; i+=1){
			if(allpieces[i].getData("pos") == location){
				this.place(allpieces[i], firstsquare[0] + j*19.1/row, firstsquare[1] + k*19.1/col, scaling_parameter/(row*col));
				k += 1;
				if(k == col){
					k = 0;
					j+= 1;
				}
			}
		}

	}

	gohome(piece){
		piece.setData("pos", 0);
		var xCoord, yCoord;

		// RED
		if(piece == this.red1){
			xCoord = 45; yCoord = 45;
		}
		else if(piece == this.red2){
			xCoord = 45; yCoord = 80;
		}
		else if(piece == this.red3){
			xCoord = 80; yCoord = 45;
		}
		else if(piece == this.red4){
			xCoord = 80; yCoord = 80;
		}

		// BLUE
		else if(piece == this.blue1){
			xCoord = 45; yCoord = 218;
		}
		else if(piece == this.blue2){
			xCoord = 80; yCoord = 218;
		}
		else if(piece == this.blue3){
			xCoord = 45; yCoord = 253;
		}
		else if(piece == this.blue4){
			xCoord = 80; yCoord = 253;
		}

		// GREEN
		else if(piece == this.green1){
			xCoord = 218; yCoord = 45;
		}
		else if(piece == this.green2){
			xCoord = 218; yCoord = 80;
		}
		else if(piece == this.green3){
			xCoord = 253; yCoord = 45;
		}
		else if(piece == this.green4){
			xCoord = 253; yCoord = 80;
		}

		// YELLOW
		else if(piece == this.yellow1){
			xCoord = 218; yCoord = 218;
		}
		else if(piece == this.yellow2){
			xCoord = 218; yCoord = 253;
		}
		else if(piece == this.yellow3){
			xCoord = 253; yCoord = 218;
		}
		else if(piece == this.yellow4){
			xCoord = 253; yCoord = 253;
		}

		this.place(piece, xCoord, yCoord, scaling_parameter);
	}

	place(piece, xCoord, yCoord, scale){
		piece.x = xCoord * scaling_parameter;
		piece.y = yCoord * scaling_parameter;
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
			default: return false;
		}
	}

	/********************************************************
						 UPDATE 
	********************************************************/

	update() {

	}


}