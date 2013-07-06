define(["jquery", "eventDispatcher", "jsonLoader", "stateController"], function ($, EventDispatcher, JSONLoader, StateController) {
	var MedievalConquest = function () {
		this.data = null;
		this.stateController = new StateController(this);
	};

	MedievalConquest.prototype = new EventDispatcher();

	MedievalConquest.prototype.run = function () {
		var that = this;

		new JSONLoader("assets/game.json").load(function(data) {
			that.data = data;
			that.stateController.addSequences(that.data.gameSequences);
			that.stateController.run("medievalConquest");
		});
	};

	return MedievalConquest;
});