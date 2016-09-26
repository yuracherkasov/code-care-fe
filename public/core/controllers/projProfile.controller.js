angular
	.module("ccApp").

controller('ProjProfileController', ProjProfileController);

function ProjProfileController($scope, $stateParams, API) {

	$scope.stateAnimateClassName = "with-right";

	var id = $stateParams.id;

	API.getProfileProject(1).then(function(resolve) {
		$scope.project = angular.fromJson(resolve.data);
		//console.log(resolve)
	})

}