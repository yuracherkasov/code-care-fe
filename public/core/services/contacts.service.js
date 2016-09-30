angular
  .module("ccApp")
  .service('contactService', contactService)

  function contactService() {

    this.getError = function(error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return "This field is required";
        }
        if (error.email) {
          return "Please enter correct email";
        }
        if (error.minlength) {
          return "Please enter the full name of your city";
        }
      }
    };

    this.getErrorMessage = function(error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return "Please write your message";
        }
      }
    };

};