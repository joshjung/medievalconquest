
(function($) {


	// initialize variables
	var currentTurn = 0, data;








	// game logic

	var init = function() {
		// initialize the game data
		console.log("intializing game...");
		recieveData();
	}

	var startGame = function() {
		// while (!winCondition) {
		// 	executeTurn();
		// }
	}

	var executeTurn = function() {
		currentTurn++;
	}

	var recieveData = function() {
		
		console.log("attempting to load game.json")
		$.ajax({
		  	url: './assets/game.json',
		  	async: false,
		  	dataType: 'json',
		  	success: function (response) {
		    	console.log("data loaded successfully");
		    	console.log(response.gameName);
		 	}
		});
	}


	//game loop

	$(document).ready(function() {
		init();
		startGame();
	});


})(jQuery);

