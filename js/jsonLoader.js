define(["jquery", "eventDispatcher"], function($, EventDispatcher) {
	var JSONLoader = function(url) {
		this.data = null;
		this.url = url;
	};

	JSONLoader.prototype = new EventDispatcher();

	JSONLoader.prototype.load = function(callback) {
		var that = this;
		$.ajax({
			dataType: "json",
			url: this.url,
			success: function(data) {
				this.data = data;
				callback(this.data);
				dispatchEvent(new Event("success"));
			}
		});
	};

	return JSONLoader;
});