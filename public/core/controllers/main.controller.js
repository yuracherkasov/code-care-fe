angular
  .module("ccApp")

//angular scroll settings
.value('duScrollOffset', -17)

.controller('MainController', MainController);

function MainController($timeout, $scope, $http) {
  //burger mobile menu 
  var doc = document;
  var body = doc.body;
  var button = doc.getElementById('menu-btn');
  var navMenu = doc.getElementById('js-menu');

  button.addEventListener("click", showMenu);
  body.addEventListener("click", hideMenu);
  navMenu.addEventListener("click", hideMenu);

  function showMenu() {
    $timeout(function() {
      navMenu.classList.add("show");
    }, 100);
  };

  function hideMenu(e) {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    };
  };


  $scope.sendMessage = function(clientData, isvalid) {
    if (isvalid) {
      $http.post('api/adress', clientData)
      .success(function(response){
        console.log(response);
      }).error(function(err){
        console.log(err);
      });
      $scope.showContactForm = true;
    } else {
      $scope.showError = true;
    }
  };

  $scope.getError = function(error) {
    if (angular.isDefined(error)) {
      if (error.required) {
        return "This field is required";
      }
      if (error.email) {
        return "Please enter correct email";
      }
      if (error.minlength){
         return "Please enter the full name of your city";
      }
    }
  };

   $scope.getErrorMessage = function(error) {
    if (angular.isDefined(error)) {
      if (error.required) {
        return "Please write your message";
      }
    }
  }

}