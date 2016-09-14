angular
  .module("ccApp")
  .service('API', APIService);

function APIService($http, $q, config, $timeout) {

  // this.loginAttempt = function(credentials) {
  //   var defer = $q.defer();
  //   $timeout(function() {
  //     var user = FakeUser.check(credentials);
  //     if (user) {
  //       defer.resolve(user);
  //     } else {
  //       defer.reject(user);
  //     }
  //   }, 300);

  this.getDevs = function() {
    $http.get(config.devs_API).then(function (response) {
      console.log(response);
    })
  }

    // $http
    //   .post(config.FAKE_API, credentials)
    //   .then(function(response) {
    //     /* if succes place our code here */
    //     console.info(response);
    //   })
    //   .catch(function(reason) {
    //     /* if error process error here */
    //     console.warn(reason);
    //   })
    //   .finally(function(argument) {
    //     setTimeout(function() {
    //       var fakeResponse = ;
    //       if (checkFakeCredentials(credentials)) {
    //         defer.resolve(fakeResponse);
    //       } else {
    //         defer.reject(null);
    //       }
    //     });
    //   });
    //return defer.promise;
 // };


};