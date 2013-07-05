define(["eventDispatcher"], function(eventDispatcher) {
	var Clock = function() {
		this.mode = 0;

		var that = this;
		that.timer = setInterval(function() {
			that.dispatchEvent(new Event("updateClock"));
		}, 1000);
	}

	Clock.prototype = new eventDispatcher();

	Clock.prototype.$displayDigital = ["updateDigital", "updateClock", "updateMode",
		function(element, callback) {
			var that = this;
			var date = new Date();
			element.html(date.getHours() + ":" + date.getMinutes() + (that.mode == 1 ? "." + date.getSeconds() : ""));

			callback();
		}
	];

	Clock.prototype.$displayAnalog = ["updateAnalog", "updateClock", "updateMode",
		function(element, callback) {
			callback();
		}
	];

	return Clock;
});