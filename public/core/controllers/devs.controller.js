angular
  .module("ccApp").

  controller('DevsPageController', DevsPageController);
  function DevsPageController($scope, DevsList, API){
    API.getDevs();


    var filterParams,
        flage;
    
    $scope.devsModel = DevsList.devsModel;

    $scope.card = $scope.devsModel[0];

    $scope.fixFilterParams = function(position, flag){
      filterParams = position;
      flage = flag;
    };

    $scope.setClass = function(item){
      var className;
      if (flage) {
        className = "black-mask";
      }
      if(item.skills.hasOwnProperty(filterParams)){
        className = "green-mask";       
      }
      return className;
    };

    $scope.showDetailsOnCard = function(item){
      $scope.card = item;
    }
    // $scope.getSkill = function(skill){
    //   var b = Object.keys(skill)[0];
    //   vm.skillMark = skill[b];     
    //   return b;
    // }

  }