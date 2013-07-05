define(["jquery", "bindingUtil", "clock", "eventDispatcher"],
function($, bindingUtil, Clock, eventDispatcher)
{	
	var clock = new Clock();
	clock.init();
	bindingUtil.bind(".clock", [clock, "displayDigital"]);
});