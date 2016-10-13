angular
	.module("ccApp").

controller('SocialController', SocialController);

function SocialController($scope, $timeout, $http, facebookService) {

	$scope.stateAnimateClassName = "with-left";

	$scope.loadUpwork = function(name) {
		$scope.social = name;
	};

	$scope.network = {};
	$scope.social = "upwork";

	// window.fbAsyncInit = function() {
	// 	FB.init({
	// 		//appId: '1000008076787760',
	// 		appId: '174816672967950',
	// 		status: true,
	// 		cookie: true,
	// 		xfbml: true,
	// 		version: 'v2.8'
	// 	});
	// };


	

	$scope.loadFacebookPost = function(name) {
			$http({
				method: 'GET',
					url: 'https://graph.facebook.com/oauth/access_token?client_id=1000008076787760&client_secret=6a97c760972cf6abb9ef5b8c53bfccae&grant_type=client_credentials'
				//url: 'https://graph.facebook.com/1604750703163227/feed?fields=permalink_url&access_token=174816672967950|i_uRl0u2Qg1tgXdUPqX-RrrNk50'
			}).then(function(response) {
				console.log(response)
				// $scope.postUrl = response.data.data[0].permalink_url;
				// facebookService.baseSettingFacebook(document, 'script', 'facebook-jssdk');
			});
		}
	}