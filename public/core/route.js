angular
  .module('ccApp', [
    'ui.router',
    'ngAnimate',
    'duScroll'
  ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'public/templates/home.html',
      controller: 'HomeController'
    })

  .state('story', {
    url: '/our-story/',
    templateUrl: 'public/templates/story.html',
    controller: 'StoryController'
  })

  .state('case', {
    url: '/case-study/',
    templateUrl: 'public/templates/case.html',
    controller: 'CaseStudyController',
    controllerAs: 'case'
  })

  .state('devs', {
    url: '/our-devs/',
    templateUrl: 'public/templates/devs.html',
    controller: 'DevsPageController',
    controllerAs: 'devs'
  })

  .state('products', {
    url: '/our-products/',
    templateUrl: 'public/templates/products.html'
  })

  .state('blog', {
    url: '/blog/',
    templateUrl: 'public/templates/blog.html'
  })

  .state('career', {
    url: '/career/',
    templateUrl: 'public/templates/career.html'
  })

  .state('social', {
    url: '/social/',
    templateUrl: 'public/templates/social.html'
  })

  .state('developer', {
    url: '/developer/:id',
    templateUrl: 'public/templates/developer.html',
    controller: 'DevPageController'
  })

  .state('post', {
    url: '/post/:id',
    templateUrl: 'public/templates/post.html'
  })

  .state('project', {
    url: '/project/:id',
    templateUrl: 'public/templates/project.html'
  })

})