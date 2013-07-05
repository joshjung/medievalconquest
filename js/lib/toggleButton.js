define(["eventDispatcher", "bindingUtil"], function(eventDispatcher, bindingUtil) {
	var ToggleButton = function() {
		this.selected = false;
		this.selectedText = "Selected";
		this.deselectedText = "Deselected";
	}

	ToggleButton.prototype = new eventDispatcher();

	ToggleButton.prototype.toggle = function ()
	{
		this.selected = !this.selected;

		this.dispatchEvent(new Event("selectedChanged"));
	}

	ToggleButton.prototype.toggleHandler = function (event)
	{
		this.toggle();
	}

	ToggleButton.prototype.$displayButton = ToggleButton.prototype.$defaultResponder = [
		"selectedChanged", "renderBindComplete",
		function(element, callback) {
			element.html("<button>" +(this.selected ? this.selectedText : this.deselectedText) + "</button>");
			element.first().click(this.toggleHandler);
			callback();
		}
	];

	return ToggleButton;
});