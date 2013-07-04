var game = function() {
	var _turnNumber = 1;
	this.getTurnNumber = function() {
		return _turnNumber;
	}
	this.setTurnNumber = function(turnNumber) {
		if (_turnNumber == turnNumber)
		{
			return;
		}
		_turnNumber = turnNumber;
		dispatchEvent(new Event("turnNumberChanged"));
	}
}