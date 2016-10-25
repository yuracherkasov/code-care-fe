angular
  .module("ccApp")
  .service('API', APIService)

function APIService($http, $resource, config) {

  //GET DEVELOPERS LIST
  this.getDevs = function() {
    var devsPromise = $http({
      method: 'GET',
      url: config.devs_API
    });
    return devsPromise;
  };

  //GET PROJECTS LIST
  this.getProjects = function() {
    var projectsPromise = $http({
      method: 'GET',
      url: config.projects_API
    });
    return projectsPromise;
  };
//test inquiry:
  this.putTest = function() {
    var testPromise = $http({
      method: 'GET',
      url: '/api/developers.json',
      data: {name: "firshman"}

    });
    return testPromise;
  };

  this.getTest = function() {
    var testPromise = $http({
      method: 'GET',
      url: '//site.code-care.pro/api/developer'

    });
    return testPromise;
  };

  // this.getProfileDev = function(){
  //       var profile = 'FAKE_SERVER/dev.json'; 
  //       return $resource(profile).query().$promise;
  //     };

  //GET PROJECT PROFILE
  this.getProfileProject = function(id) {
    var profilePromise = $http({
      method: 'GET',
      url: 'FAKE_SERVER/projectId_'+id+'.json'
    })
      return profilePromise;
    };

  //GET DEVELOPER PROFILE
  this.getProfileDev = function(id) {
    var profilePromise = $http({
      method: 'GET',
      url: 'FAKE_SERVER/devId_'+id+'.json'
    });
    return profilePromise;
  };  
};