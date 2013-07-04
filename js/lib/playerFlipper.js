var Flipper = function(p1Div, p2Div, p3Div, p4Div, p5Div, p6Div) {
	
	this.playerDivs = [p1Div, p2Div, p3Div, p4Div, p5Div, p6Div]
	this.currentPlayer = 0;


	this.viewDivs = function() {
		for (var i in this.playerDivs)
		console.log(this.playerDivs[i]);
	}

	this.initialize = function() {
		currentPlayer = 0;
		$(this.playerDivs[0]).addClass("activeDiv");
		console.log(this.currentPlayer);
	}

	this.advanceTurn = function() {
		

		$(this.playerDivs[this.currentPlayer]).hide();

		this.currentPlayer++;

		if (this.currentPlayer > 5)
			this.currentPlayer = 0;
		

		$(this.playerDivs[this.currentPlayer]).fadeIn();
		console.log(this.currentPlayer);

	}
}




var playerFlipper = new Flipper("#player1", "#player2", "#player3", "#player4", "#player5", "#player6");




$(document).ready(function() {

	playerFlipper.initialize();

});