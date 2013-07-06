define(["eventDispatcher"], function(EventDispatcher) {
	var MonochromeSwitcher = function() {
		this.state = false;
		this.speed = Math.random() * 1000;
		this.timer = -1;
	};

	MonochromeSwitcher.prototype = new EventDispatcher();

	MonochromeSwitcher.prototype.$render = MonochromeSwitcher.prototype.$defaultResponder = [
			"renderBindComplete", "stateChanged",
		function(element, callback) {
			var that = this;
			if (this.timer == -1) {
				this.timer = setInterval(function() {
					that.state = !that.state;
					that.dispatchEvent(new Event("stateChanged"));
				}, this.speed);
			}

			element.css("background-color", that.state ? "#000000" : "#FFFFFF");

			callback();
		}
	];

	return MonochromeSwitcher;
});