angular
  .module("ccApp").

controller('DevPageController', DevPageController);

function DevPageController($scope, DevProfileModel) {

  $scope.ProfileData = DevProfileModel.devModel;
  console.log($scope.ProfileData)
}