define(["eventDispatcher"], function(eventDispatcher)
{
	var Clock = function()
	{
		this.prototype = new eventDispatcher();

		this.prototype.dispatch = function()
		{
			console.log("dispatching updateClock");
			this.dispatchEvent(new Event("updateClock"));
		};

		this.prototype.init = function()
		{
			this.timer = setInterval(this.dispatch, 1000);
		};
		
		this.prototype.$displayDigital = ["updateDigital", "updateClock", function(element, callback) {
			
			var date = new Date();
			element.html(date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds());
			
			callback();
		}];

		this.prototype.$displayAnalog = ["updateAnalog", "updateClock", function(element, callback) {
			callback();
		}];
	}

	return Clock;

});