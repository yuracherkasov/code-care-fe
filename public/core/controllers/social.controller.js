angular
	.module("ccApp").

controller('SocialController', SocialController);

function SocialController($scope, $timeout, $http, networkService) {

	$scope.stateAnimateClassName = "page-animation__slide-left";

	$scope.social = "upwork";

	$scope.FbPostUrl = "https://www.facebook.com/permalink.php?story_fbid=1605129069792057&id=100008849378469&pnref=story";
	$scope.TwPostUrl = "842446743568506880";

	$scope.initSocial = function() {
		networkService.FbInit(document, 'script', 'facebook-jssdk');
		networkService.TwInit(document, 'script', 'twitter-jssdk')
		.then( 
			function(){
				twttr.widgets.createTweet(
				  $scope.TwPostUrl,
				  document.getElementById('tw-post'),
				  {
				    width: 500
				  }
	  		)
			},
			function(){
				console.error('Twitter init error')
			}
		)
	};

	$scope.initSocial();

	$scope.loadPost = function(name){
		 $scope.social = name;
	};

}