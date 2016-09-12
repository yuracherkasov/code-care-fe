angular
  .module("ccApp").

  controller('CaseStudyController', CaseStudyController);
  function CaseStudyController($scope, CaseList){

    var filterParams;
    var flage = false;

    $scope.stateAnimateClassName = "with-right";
    $scope.caseModel = CaseList.caseModel;

    $scope.card = $scope.caseModel[0];

    $scope.showDetailsOnCard = function(item){
      $scope.card = item;
    }

    $scope.fixFilterParams = function(position, flag){
      filterParams = position;
      flage = flag;
    };

    $scope.setClass = function(item){
      var className;
      if (flage) {
        className = "black-mask";
      }
        if(item.technologies.hasOwnProperty(filterParams)){
          className = "green-mask";   
      }
      return className;
    };

  }