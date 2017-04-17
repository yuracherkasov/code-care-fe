angular
  .module("ccApp")
  .factory('networkService', function($q, $window) {
    return {
      FbInit: function(d, s, id) {
        if($window.FB){
          delete $window.FB
        };
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
      },

      TwInit: function(d, s, id){
        var q = $q.defer();

        if ($window.twttr){
          setTimeout(function(){
            q.resolve()
          }, 100)
        } else {
          var js, fjs = d.getElementsByTagName(s)[0],
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);
          js.addEventListener( "load", onloadApi)
          function onloadApi() {
            if($window.twttr){
              q.resolve();
            } else {
              q.reject()
            }
            
          }
        }
               
        return q.promise;
      }
    };

  });