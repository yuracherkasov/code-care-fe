angular
  .module("ccApp")
  .factory('facebookService', function($q) {
    return {
      // getMyLastName: function() {
      //   var deferred = $q.defer();
      //   FB.api('/me', {
      //     fields: 'name'
      //   }, function(response) {
      //     if (!response || response.error) {
      //       deferred.reject('Error occured');
      //     } else {
      //       deferred.resolve(response);
      //     }
      //   });
      //   return deferred.promise;
      //  }
      baseSettingFacebook: function(d, s, id) {
        // var js, fjs = d.getElementsByTagName(s)[0];
        // if (d.getElementById(id)) {
        //   return;
        // }
        // js = d.createElement(s);
        // js.id = id;
        // js.src = "//connect.facebook.net/en_US/sdk.js";
        // fjs.parentNode.insertBefore(js, fjs);


        //appId: '1000008076787760',

  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  // js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8&appId=174816672967950";
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1000008076787760";
  fjs.parentNode.insertBefore(js, fjs);

      }
    };

  });