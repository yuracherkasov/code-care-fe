angular
	.module("ccApp").

controller('DevPageController', DevPageController);

function DevPageController($scope, $stateParams, $document, $window, API, transformResults, fakeScroll) {

	$scope.stateAnimateClassName = "page-animation__slide-left";

	var id = $stateParams.id;
	var doc = $document[0];
	var w = $window;
	var el = doc.getElementById("projects-scroll");
	


	API.getProfileDev(id).then(function(resolve) {
		$scope.profile = resolve.data;
		var str = resolve.data.description;
		$scope.aboutDev = transformResults.parseTextOnParagraf(str);
		fakeScroll.initEl(el);

	});

	$scope.setElHeight = function() {
		fakeScroll.setHeight(el);
	}
	w.addEventListener("resize", $scope.setElHeight);

}