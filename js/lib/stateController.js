define(["eventDispatcher"], function(EventDispatcher) {
	var StateController = function(target) {
		this.target = target;
		this.threads = [];

		this.Thread = function(id, callback, sequence, stateController) {
			// The thread's id. Each thread ever created should have a unique one.
			this.id = id;
			// The current index of the currently running element.
			this.curSequenceIx = -1;
			// The sequence this thread is running.
			this.sequence = sequence;
			// The function to call when this thread is done executing.
			this.callback = callback;

			this.stateControllerParent = stateController;
		}

		this.Thread.prototype.next = function() {
			this.curSequenceIx++;

			if (this.curSequenceIx == this.sequence.sequence.length) {
				// We are done with this sequence, so tell whoever is listening to us
				// that we are done.
				this.callback();
				return;
			}

			this.curElement = this.sequence.sequence[this.curSequenceIx];


			// Trigger another sequence
			if (typeof this.curElement == "string") {
				console.log("> [" + new Date().toLocaleTimeString() + "] " + this.curElement);

				var thread = new this.stateControllerParent.Thread(this.stateControllerParent.id, this.next, this.stateControllerParent.getSequenceByName(this.curElement), this.stateControllerParent);

				thread.next();

				return;
			}

			if (this.curElement.hasOwnProperty("call")) {
				console.log("> [" + new Date().toLocaleTimeString() + "] calling " + this.curElement.call + "()");

				var func = this.stateControllerParent.target[this.curElement["call"]];

				if (func === undefined)
					throw ("Could not find function '" + this.curElement["call"] + " on target.");
				
				var params = this.curElement.hasOwnProperty("params") ? this.curElement["params"] : null;
				func.apply(this.target, [this.next].concat(params));
			}
		}

		this.lastID = 0;
		this.sequences = [];
		this.nameToSequenceMap = {};
		this.threads = [];
		this.idToThreadMap = {};
	};

	StateController.prototype = new EventDispatcher();

	StateController.prototype.getSequenceByName = function(name) {
		if (this.nameToSequenceMap[name] === undefined)
			throw "Could not find a sequence with the specified name.";

		return this.nameToSequenceMap[name];
	}

	/** =====================================================================
	 * A sequence is:
	 * {
	 *	name: "the name of the sequence",
	 *	elements: []
	 * }
	 *
	 * An element is:
	 * {
	 *   block: false if the sequence should continue
	 *			immediately after triggering another. False if it should wait for
	 *			it to finish. (optional, true by default)
	 *	 element: can be either a function or a name of another sequence to run
	 *			(String) or another unnamed sequence itself (Array). If it is a
	 *			function, the function can return a string of the next sequence
	 *			to run or undefined if it is complete. In this way a function
	 *			can be used to evaluate which next sequence should be run.
	 * }
	 * ===================================================================== */
	StateController.prototype.addSequences = function(sequencesArray) {
		for (var i = 0; i < sequencesArray.length; i++) {
			var sequenceObj = sequencesArray[i];
			var name = sequenceObj.name;
			var element = sequenceObj.sequence;

			if (this.nameToSequenceMap[name] !== undefined) {
				// This sequence has already been initialized.
				throw "A sequence with the name '" + name + "' has already been initialized.";
			}

			this.nameToSequenceMap[name] = sequenceObj;
			this.sequences.push(sequenceObj);
		}
	}

	StateController.prototype.run = function(name, callback) {
		var that = this;
		var sequence = this.nameToSequenceMap[name];

		if (sequence === undefined) {
			throw "StateController::run(): Could not find the sequence by name of '" + name + "'";
		}

		var thread = new(this.Thread)(this.lastID++, function() {
			that.threads.splice(that.threads.indexOf(thread), 1);
			callback();
		}, sequence, this);

		this.threads.push(thread);

		thread.next();
	}

	return StateController;
});