angular
  .module("ccApp")

//angular scroll settings
.value('duScrollOffset', -17)

.controller('MainController', MainController);

function MainController($scope, $timeout, $http, $document, contactService) {
  //for OUR PRODUCTS page
  $scope.exampleProj="proj1"

  //burger mobile menu control
  var doc = $document[0];
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

  //Contact-form  control:

  $scope.$on('$stateChangeStart', function(e, toState) {
    if (toState.name !== "contact") {
      doc.addEventListener('click', listenerClickOnHideForm);
      $scope.hidePopUpForm()
    } else {
      doc.removeEventListener('click', listenerClickOnHideForm);
      $scope.showPopUpForm();
    }
  });

  function listenerClickOnHideForm(e) {
    var myel = doc.getElementById("form-cell");
    if (myel && myel === e.target) {
      $scope.hidePopUpForm();
      $scope.$apply();
    }
  };

  $scope.showPopUpForm = function() {
    $scope.formTemplate = "public/templates/contact.popup.html";
    body.style.cssText = "overflow: hidden; padding-right: 17px";
  };

  $scope.hidePopUpForm = function() {
    $scope.formTemplate = "";
    body.style.cssText = "";
  };

  $scope.showFooterForm = function() {
    $scope.showForm = true;
  }

  $scope.newClient = {};
  // $scope.$watch("newClient.message", function(newValue) {
  //   $scope.newClient.message = $sanitize(newValue);
  // });


  var messObj = {};
  $scope.sendMessage = function(clientData, isvalid) {
    if (isvalid) {
      messObj["from"] = clientData.email;
      messObj["body"] = "Name: "+clientData.name+"; City: "+clientData.city+"; Phone: "+clientData.phone+"; Message: "+clientData.message;
      var json = angular.toJson(messObj);
      //console.log(json)
      $http.post('/api/email', json)
        .success(function(response) {
          console.log(response);
          $scope.showContactForm = true;
          $scope.showThanksText = true;
          $scope.showForm = false;
        }).error(function(err) {
          console.log(err);
        });
    } else {
      $scope.showError = true;
    }
  };

  $scope.getError = function(error) {
    return contactService.getError(error)
  };

  $scope.getErrorMessage = function(error) {
    return contactService.getErrorMessage(error)
  };

}