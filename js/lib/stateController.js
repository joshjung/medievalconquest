define(["eventDispatcher"], function (EventDispatcher) {
	var StateController = function ()
	{
		this.Thread = function ()
		{
			this.id = "";
			this.index = 0;
			this.sequence = null;
		}

		this.Thread.prototype.next = function()
		{
			
		}

		this.lastID = 0;
		this.sequences = [];
		this.nameToSequenceMap = {};
		this.threads = [];
		this.idToThreadMap = {};
	};

	StateController.prototype = new EventDispatcher();

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
	StateController.prototype.addSequences = function(sequencesArray)
	{
		for (var i = 0; i < sequencesArray.length;i++)
		{
			var sequenceObj = sequencesArray[i];
			var name = sequenceObj[0];
			var element = sequenceObj[1];

			if (this.nameToSequenceMap[name] !== undefined)
			{
				// This sequence has already been initialized.
				throw "A sequence with the name '" + name + "' has already been initialized.";
			}
			
			nameToSequenceMap[name] = sequenceObj;
			sequences.push(sequenceObj);
		}
	}

	StateController.prototype.run = function(name)
	{
		var sequence = this.nameToSequenceMap[name];

		if (sequence === undefined)
		{
			throw "StateController::run(): Could not find the sequence by name of '" + name + "'";
		}

		var thread = new this.Thread();
		thread.id = this.lastID++;
		this.idToThreadMap[thread.id] = thread;
		thread.sequence = sequence;

	}
});