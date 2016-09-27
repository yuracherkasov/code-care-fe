angular
	.module("ccApp").

controller('DevPageController', DevPageController);

function DevPageController($scope, $stateParams, API, transformResults) {

	$scope.stateAnimateClassName = "with-left";

	var id = $stateParams.id;

	API.getProfileDev(id).then(function(resolve) {
		$scope.profile = resolve.data;
		var str = resolve.data.about;
		$scope.aboutDev = transformResults.parseTextOnParagraf(str);
	});

	API.getTest().then(function(resolve){
		console.log(resolve.data)
	}, function(err){
		console.log("err")
	})

}