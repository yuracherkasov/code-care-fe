angular
  .module("ccApp")

//angular scroll settings
.value('duScrollOffset', -17)

.controller('MainController', MainController);

function MainController($scope, $timeout, $http, $document, contactService) {

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

  $scope.sendMessage = function(clientData, isvalid) {
    if (isvalid) {
      $http.post('api/adress', clientData)
        .success(function(response) {
          console.log(response);
          $scope.showContactForm = true;
          $scope.showThanksText = true;
          $scope.showForm = false;
        }).error(function(err) {
          console.log(err);
        });
      //после того как api будет готово удалить следующие строки
      $scope.showContactForm = true;
      $scope.showThanksText = true;
      $scope.showForm = false;
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