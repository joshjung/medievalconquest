define(["jquery", "bindingUtil", "clock", "toggleButton"],
function($, BindingUtil, Clock, ToggleButton)
{
	BindingUtil.bind(".clock", [new Clock(), "displayDigital"]);
	BindingUtil.bind("#toggleButton", new ToggleButton());
});