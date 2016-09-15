angular
  .module("ccApp")
  .service('API', APIService);

function APIService($http, config) {

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
  
};