gameApp.controller('RoundResultController', function($scope, $state, fStatus, fPlayers){
	(function(){
		var roundResultObject = fStatus.getRoundResultResponse();

		console.log(roundResultObject);
		var me = fPlayers.getMe();
		var opponent = fPlayers.getOpponent();

		$scope.me = me;
		$scope.me.score = roundResultObject.gameInfo.scoreA;
		
		$scope.opponent = opponent; 
		$scope.opponent.score = roundResultObject.gameInfo.scoreB;
		
		$scope.$apply();

	})();
	
	var reload = function reload() {
		console.log("clicked");
		location.reload();
	}
});