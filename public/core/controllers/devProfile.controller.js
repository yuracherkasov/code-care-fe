angular
	.module("ccApp").

controller('DevPageController', DevPageController);

function DevPageController($scope, $stateParams, API) {

	$scope.stateAnimateClassName = "with-left";

	var id = $stateParams.id;

	API.getProfileDev(id).then(function(resolve) {
		$scope.profile = resolve.data;
		parseText()
	})

	function parseText() {
		var str = $scope.profile.about;
		var target = "\r\n";
		var pos = 0;

		$scope.aboutDev = [];
		
		while (true) {
			var foundPos = str.indexOf(target, pos);
			var subStr = str.slice(pos, foundPos);
			$scope.aboutDev.push(subStr);
			pos = foundPos + 1;
			if (foundPos == -1) break;
		}
	}
}