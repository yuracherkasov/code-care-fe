angular
  .module("ccApp").

  controller('HomeController', HomeController);
  function HomeController($scope, $interval){

    $scope.stateAnimateClassName = "fade";

    $scope.slideIndex = 0;
    
    $scope.homePageSlider = function(){
    	$interval(function(){
    		$scope.slideIndex = ($scope.slideIndex + 1 == 3) ? 0 : $scope.slideIndex + 1;
    	}, 5000)
    };
    $scope.homePageSlider();
  }