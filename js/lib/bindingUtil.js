define([], function() {
	var bindingUtil = {
		classToResponderMap : {},
		
		init : function() {
			console.log("initializing bindingUtil");
		},

		bind : function(className, responderReference) {
			
			if (typeof className != "string")
				throw "className isn't a string: " + className;

			if (responderReference.length != 2)
				throw "responder array must be formatted as [object, responderClassName]: " + array;

			if (responderReference[0]===undefined)
				throw "first element of responder reference needs to be non-null";


			var obj = responderReference[0];
			// $updateDigital. clock["$updateDigital"] is the same as clock.$updateDigital
			var responder = obj["$" + responderReference[1]];

			var events = responder.slice(0, responder.length - 1);

			var responderFunction = function(event) {
				$(className).each(function() {
					responder[responder.length - 1]($(this), function() { console.log("done!");});
				});
			}

			for (var i in events) {
				obj.addEventListener(events[i], responderFunction);
			}

		}
	}

	return bindingUtil;

});