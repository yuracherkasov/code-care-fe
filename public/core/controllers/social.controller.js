angular
  .module("ccApp").

  controller('SocialController', SocialController);
  function SocialController($scope, $timeout){

    $scope.stateAnimateClassName = "with-left";

    $scope.social = "twitter";
    $scope.loadLastPost = function(name){
      $scope.social = name;      
    }      
  }