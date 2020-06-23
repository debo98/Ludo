scaling_parameter = Math.min(Math.min(screen.width/420, screen.height/300), 1);

var config = {
	width: 1 + scaling_parameter*420,
	height: 1 + scaling_parameter*300,
	backgroundColor: 0x000000,
	scene: [Scene1, Scene2]
}

window.onload = function () {
	var game = new Phaser.Game(config);
}