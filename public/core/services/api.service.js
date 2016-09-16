angular
  .module("ccApp")
  .service('API', APIService);

function APIService($http, $resource, config) {

  this.getDevs = function() {
    var devsPromise = $http({
      method: 'GET',
      url: config.devs_API
    });
    return devsPromise;
  };

  this.getProjects = function() {
    var projectsPromise = $http({
      method: 'GET',
      url: config.projects_API
    });
    return projectsPromise;
  };

  // this.getProfileDev = function(){
  //       var profile = 'FAKE_SERVER/dev.json'; 
  //       return $resource(profile).query().$promise;
  //     };

  this.getProfileDev = function(id) {
    var profilePromise = $http({
      method: 'GET',
      url: 'FAKE_SERVER/devId_'+id+'.json'
    });
    return profilePromise;
  };

  
};