angular
  .module('ccApp', [
      'ui.router',
      'ngAnimate',
      'duScroll'
  ])
  
  // .run(function($rootScope, $state){
  //     $rootScope.$on('$stateChangeStart', function(event, toState, params){
  //         if(toState.redirectTo){
  //             event.preventDefault();
  //             $state.go(toState.redirectTo, params);          
  //         }
  //     })
  // })
  
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })

    .state('story', {
        url: '/our-story/',
        templateUrl: '/templates/story.html',
        controller: 'StoryController'
    })

    .state('case', {
        url: '/case-study/',
        templateUrl: '/templates/case.html',
        controller: 'CaseStudyController',
        controllerAs: 'case'
    })

    .state('devs', {
        url: '/our-devs/',
        templateUrl: '/templates/devs.html',
        controller: 'DevsPageController',
        controllerAs: 'devs'
    })    

    .state('products', {
        url: '/our-products/',
        templateUrl: '/templates/products.html'
    })

    .state('blog', {
        url: '/blog/',
        templateUrl: '/templates/blog.html'
    })
    
    .state('career', {
        url: '/career/',
        templateUrl: '/templates/career.html'
    })

    .state('social', {
        url: '/social/',
        templateUrl: '/templates/social.html'
    })

    .state('developer', {
        url: '/developer/:id',
        templateUrl: '/templates/developer.html'
    })

    .state('post', {
        url: '/post/:id',
        templateUrl: '/templates/post.html'
    })

    .state('project', {
        url: '/project/:id',
        templateUrl: '/templates/project.html'
    })


    // .state('app.products',{
    //     url: 'products/',
    //     templateUrl: '/templates/products.html' 
    // })
      
    // .state('app.details',{
    //     url: 'details/:id/',
    //     template: '<h1>details - {{currentItem}}</h1>',
    //     controller: function($scope, $state, $stateParams){
    //         $scope.currentItem = $stateParams.id;
    //     }
    // })
    
    // .state('app.products.details',{
    //     url: 'details/:id/',
    //     template: '<h1>details</h1>'
    // })
    
  
    
    
    //  .state('app.basket',{
    //     url: 'basket/',
    //     template: '<h1>Gimme you`r money!</h1>'
    // })
    
    
    
    
    //$stateProvider.()
  })
  // .controller('AboutController', function($scope){
  //   $scope.test = 'Привет из контроллера!';
  // })
  // .controller('BlabloutController', function($scope){
  //   $scope.test = 'Не ходи сюда!!!';
  // })
  // .controller('UserController', function($scope, $routeParams, $location){
  //   console.log($routeParams);
  //   $scope.userId = $routeParams.userId;
  // })
