define([], function() {
	var bindingUtil = {
		classToResponderMap: {},

		init: function() {
			console.log("initializing bindingUtil");
		},

		respond: function(className, responderReference) {

			if (typeof className != "string")
				throw "className isn't a string: " + className;

			var obj;
			var responder;
			if (Object.prototype.toString.call(responderReference) === '[object Array]') {
				if (responderReference.length != 2)
					throw "responder array must be formatted as [object, responderClassName]: " + array;

				if (responderReference[0] === undefined)
					throw "first element of responder reference needs to be non-null";

				obj = responderReference[0];
				responder = obj["$" + responderReference[1]];
			} else {
				obj = responderReference;

				if (!obj.hasOwnProperty("$defaultResponder"))
					throw "A responder that is a standard Object needs to have a property $defaultResponder.";

				responder = obj.$defaultResponder;
			}

			if (responder.length < 2)
				throw "The responder " + responder + " needs at least one event and a final function.";

			var events = responder.slice(0, responder.length - 1);

			var responderFunction = function(event) {
				$(className).each(function() {
					responder[responder.length - 1]($(this), function() {});
				});
			}

			for (var i in events) {
				console.log("+Responder: " + className + " -> " + events[i]);
				obj.addEventListener(events[i], responderFunction);
			}

		}
	}

	return bindingUtil;

});