angular
  .module("ccApp").

  controller('StoryController', StoryController);
  function StoryController($scope, $interval, $timeout){
    $scope.content = "do" ;  

    $scope.slideIndex = 0;
    var ourStorySlider;

   	$scope.runInterval = function(){
      ourStorySlider = $interval(function(){
        $scope.slideIndex = ($scope.slideIndex + 1 == 3) ? 0 : $scope.slideIndex + 1;
      }, 7000)
    };    
   	$scope.runInterval();

    $scope.stopInterval = function(){
			$interval.cancel(ourStorySlider);
		};
		$scope.selectedIndex = function(c){
			$scope.slideIndex = c;
		}

  }