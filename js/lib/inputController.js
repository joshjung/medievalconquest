(function($, turnInput, playerFlipper) {

	var el = $(turnInput);

	var init = function() {
		
		console.log("input Controller loaded");
		
		$("#turnInput").focus(function() {
			// $(this).keypress(function(e) {
			// 	if (e.which==13)
			// 		$(this).val("");
			// });
		});

		$("#turnInput").on("keypress", function(e) {
			e.preventDefault();
			
			if (e.which==13) 
				playerFlipper.advanceTurn();
			//...

		});

	}



	$(document).ready(function() {
		init();	
	});

})(jQuery, "#turnInput", playerFlipper);