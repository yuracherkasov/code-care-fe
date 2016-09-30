angular
	.module("ccApp").

controller('ProjProfileController', ProjProfileController);

function ProjProfileController($scope, $stateParams, $sce, API, transformResults) {

	$scope.stateAnimateClassName = "with-right";

	var id = $stateParams.id; 

	$scope.sce = $sce;

	API.getProfileProject(1).then(function(resolve) {
		var content = resolve.data;
		var header = content.h1;
		var mainIdea = content.main_idea;
		var solution = content.solution;
		var technologies = content.technologies_used;
		var involvedDevs = content.developersList;

		$scope.content = content;
		$scope.header = transformResults.parseTextOnNewLine(header);
		$scope.mainIdea = transformResults.parseTextOnParagraf(mainIdea);
		$scope.solution = transformResults.parseTextOnParagraf(solution);
		$scope.technologies = transformResults.lowercaseWithArray(technologies); 

		API.getDevs().then(function(response){
			var allDevs = response.data;
			$scope.involvedDevs = transformResults.getDevsById(involvedDevs, allDevs); 
		});


		//console.log(devsList)
	})

}