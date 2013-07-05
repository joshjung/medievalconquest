define(["eventDispatcher", "bindingUtil"], function(eventDispatcher, bindingUtil) {
	var ToggleButton = function() {
		this.selected = false;
		this.selectedText = "Selected";
		this.deselectedText = "Deselected";
		this.dispatchEvent(new Event("initialize"));
	}

	ToggleButton.prototype = new eventDispatcher();

	ToggleButton.prototype.toggle = function ()
	{
		this.selected = !this.selected;
	}

	ToggleButton.prototype.$updateDisplay = ToggleButton.prototype.$defaultResponder = [
		"selectedChanged", "initialize",
		function(element, callback) {
			element.html(this.selected ? this.selectedText : this.deselectedText);
			callback();
		}
	];

	return ToggleButton;
});