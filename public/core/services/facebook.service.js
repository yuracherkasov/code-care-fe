angular
  .module("ccApp")
  .factory('networkService', function($q) {
    return {
      baseSettingFacebook: function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1000008076787760";
        fjs.parentNode.insertBefore(js, fjs);
      }
    };

  });