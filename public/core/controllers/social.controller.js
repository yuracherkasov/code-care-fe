angular
	.module("ccApp").

controller('SocialController', SocialController);

function SocialController($scope, $document, networkService) {

	$scope.stateAnimateClassName = "page-animation__slide-left";

	$scope.social = "upwork";

	$scope.FbPostUrl = "https://www.facebook.com/permalink.php?story_fbid=1605129069792057&id=100008849378469&pnref=story";
	$scope.TwPostUrl = "842446743568506880";

	$scope.initSocial = function() {
		var d = $document[0];
		networkService.FbInit(d, 'script', 'facebook-jssdk');
		networkService.InstgrmInit(d, 'script');
		networkService.TwInit(d, 'script', 'twitter-jssdk')
		.then( 
			function(){
				twttr.widgets.createTweet(
				  $scope.TwPostUrl,
				  d.getElementById('tw-post'),
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