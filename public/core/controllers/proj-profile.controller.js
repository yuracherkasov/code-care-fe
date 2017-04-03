angular
	.module("ccApp").

controller('ProjProfileController', ProjProfileController);

function ProjProfileController($scope, $stateParams, $sce, API, transformResults) {

	$scope.stateAnimateClassName = "page-animation__slide-right";

	var id = $stateParams.id;

	$scope.sce = $sce;

	API.getProfileProject(id).then(function(resolve) {
		var content = resolve.data;
		var header = content.title;
		var mainIdea = content.description;
		var solution = content.description_solution;

		$scope.content = content;
		$scope.header = transformResults.parseTextOnNewLine(header);
		$scope.mainIdea = transformResults.parseTextOnParagraf(mainIdea);
		$scope.solution = transformResults.parseTextOnParagraf(solution);
	})

}