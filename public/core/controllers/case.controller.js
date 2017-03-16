angular
  .module("ccApp").

controller('CaseStudyController', CaseStudyController);

function CaseStudyController($scope, API) {

  var filterParams;
  var flage = false;

  $scope.caseModel = [];
  $scope.stateAnimateClassName = "with-right";

  
  (function getCase() {
    API.getProjects().then(function(response) {
      $scope.caseModel = response.data;
      $scope.card = response.data[0];
    })
  })();

  $scope.showDetailsOnCard = function(item) {
    $scope.card = item;
  };

  $scope.fixFilterParams = function(position, flag) {
    filterParams = position;
    flage = flag;
  };

  $scope.setClass = function(item) {
    var className;
    if (flage) {
      if (item.technologies.some(function (item) {
          return item.name == filterParams
        })) {
        className = "";
      } else {
        className = "black-mask";
      }
    }
    if (item.technologies.hasOwnProperty(filterParams)) {
      className = "green-mask";
    }
    return className;
  };

}