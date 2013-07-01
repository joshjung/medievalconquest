(function($) {



	var currentTurn = 0;




	var init = function() {
		// initialize the game data
		console.log("intializing game...");
	}

	var startGame = function() {
		while (!winCondition) {
			executeTurn();
		}
	}

	var executeTurn = function() {
		currentTurn++;
	}


	$(document).ready(function() {
		init();
		startGame();
	});


})(jQuery);

