define(["jquery", "bindingUtil", "monochromeSwitcher"], function($, BindingUtil, MonochromeSwitcher) {
	BindingUtil.bind(".colorBox", function() {
		return new MonochromeSwitcher();
	});
});