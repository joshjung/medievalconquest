define(["jquery", "bindingUtil", "clock", "toggleButton"],
function($, BindingUtil, Clock, ToggleButton)
{
	
	BindingUtil.respond(".colorBox", [function() {return new colorBox();}, "changeColor" ]);

});