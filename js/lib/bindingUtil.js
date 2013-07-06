define([], function() {
	var BindingUtil = function() {
		this.classToResponderMap = {};
	}

	BindingUtil.prototype._bind = function(jqueryObj, target, targetResponder) {
		var events = targetResponder.slice(0, targetResponder.length - 1);

		var responderFunction = function(event) {
			targetResponder[targetResponder.length - 1].call(target, jqueryObj, function() {});
		}

		for (var i in events) {
			console.log("+Responder: " + jqueryObj.val() + " -> " + events[i]);
			target.addEventListener(events[i], responderFunction);
		}

		target.dispatchEvent(new Event("renderBindComplete"));
	};

	BindingUtil.prototype.bind = function(selector, responderReference) {

		if (typeof selector != "string")
			throw "selector isn't a string: " + selector;

		var obj;
		var responder;
		var useDefaultResponder;

		if (Object.prototype.toString.call(responderReference) === '[object Array]') {
			if (responderReference.length != 2)
				throw "responder array must be formatted as [object, responderClassName]: " + array;

			if (responderReference[0] === undefined)
				throw "first element of responder reference needs to be an instance of an object or a function (to use as a factory).";

			obj = responderReference[0];

			useDefaultResponder = false;
		} else {
			obj = responderReference;

			useDefaultResponder = true;
		}

		var that = this;
		$(selector).each(function(index, para) {
			var target = (typeof obj == "function") ? obj() : obj;

			if (!target.__proto__.hasOwnProperty("$defaultResponder"))
				throw "A responder that is a standard Object needs to have a property $defaultResponder.";

			responder = useDefaultResponder ? target.$defaultResponder : target["$" + responderReference[1]];

			if (responder.length < 2)
				throw "The responder " + responder + " needs at least one event and a final function.";

			that._bind($(para), target, responder);
		});
	};

	return new BindingUtil();

});