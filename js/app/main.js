define(["jquery", "bindingUtil", "clock", "toggleButton"],
function($, BindingUtil, Clock, ToggleButton)
{
	BindingUtil.respond(".clock", [new Clock(), "displayDigital"]);
	BindingUtil.respond("#toggleButton", new ToggleButton());
});