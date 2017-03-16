angular
  .module("ccApp").

controller('DevsPageController', DevsPageController);

function DevsPageController($scope, API) {

  var filterParams,
      flage;

  $scope.devsModel = [];

  (function getDevs() {
    API.getDevs().then(function(response) {
      $scope.devsModel = response.data;
      $scope.card = response.data[0];
      $scope.card.firstName = $scope.card.name.split(' ')[0];
      $scope.card.lastName = $scope.card.name.split(' ')[1] || '';
    })
  })();

  $scope.fixFilterParams = function(position, flag) {
    filterParams = position;
    flage = flag;
  };

  $scope.setClass = function(item) {
    var className;
    if (flage) {
      className = "black-mask";
    }
    if (item.skills.hasOwnProperty(filterParams)) {
      className = "green-mask";
    }
    return className;
  };

  $scope.showDetailsOnCard = function(item) {
      $scope.card = item;
      $scope.card.firstName = $scope.card.name.split(' ')[0];
      $scope.card.lastName = $scope.card.name.split(' ')[1] || '';
  };
}