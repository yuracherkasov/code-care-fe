angular
	.module("ccApp").

controller('ProjProfileController', ProjProfileController);

function ProjProfileController($scope, $stateParams, $sce, API, transformResults) {

	$scope.stateAnimateClassName = "with-right";

	var id = $stateParams.id;

	$scope.sce = $sce;

	API.getProfileProject(id).then(function(resolve) {
		var content = resolve.data;
		var header = content.title;
		var mainIdea = content.description;
		var solution = content.description_solution;
		var technologies = content.technologies;

		$scope.content = content;
		$scope.header = transformResults.parseTextOnNewLine(header);
		$scope.mainIdea = transformResults.parseTextOnParagraf(mainIdea);
		$scope.solution = transformResults.parseTextOnParagraf(solution);
		$scope.technologies = transformResults.lowercaseWithArray(technologies);
	})

}