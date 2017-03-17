angular
  .module("ccApp")
  .service('API', APIService)

function APIService($http, $resource, config) {

  //GET DEVELOPERS LIST
  this.getDevs = function() {
    var devsPromise = $http({
      method: 'GET',
      url: config.API + 'developer'
    });
    return devsPromise;
  };

  //GET PROJECTS LIST
  this.getProjects = function() {
    var projectsPromise = $http({
      method: 'GET',
      url: config.API + 'project'
    });
    return projectsPromise;
  };

  //GET PROJECT PROFILE
  this.getProfileProject = function(id) {
    var profilePromise = $http({
      method: 'GET',
      url: config.API + 'project/' + id
    });
      return profilePromise;
    };

  //GET DEVELOPER PROFILE
  this.getProfileDev = function(id) {
    var profilePromise = $http({
      method: 'GET',
      url: config.API + 'developer/' + id
    });
    return profilePromise;
  };

    this.getTechnologies  = function() {
        var technologies = $http({
            method: 'GET',
            url: config.API + 'technology'
        });
        return technologies;
    };
};