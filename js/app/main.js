define(["jquery", "bindingUtil", "clock", "eventDispatcher", "toggleButton"],
function($, bindingUtil, Clock, eventDispatcher)
{
	bindingUtil.respond(".clock", [new Clock(), "displayDigital"]);
	bindingUtil.respond("#toggleButton", new ToggleButton());
});