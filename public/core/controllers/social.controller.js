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

//facebookService.baseSettingFacebook(document, 'script', 'facebook-jssdk');
	

	$scope.loadFacebookPost = function(name) {
			$http({
				method: 'GET',				
				url: 'https://graph.facebook.com/v2.8/1605650713073226/feed?fields=permalink_url&access_token=1000008076787760|IfGh42j1MgroV7xX-89Z9I8eoAk'
				//url: 'https://graph.facebook.com/v2.8/1604750703163227/feed?fields=permalink_url&access_token=174816672967950|i_uRl0u2Qg1tgXdUPqX-RrrNk50'

			}).then(function(response) {
				console.log(response)
				if(response.data){
					$scope.postUrl = response.data.data[0].permalink_url;
				} else {
					$scope.postUrl = "https://www.facebook.com/permalink.php?story_fbid=1490986731206292&id=100008849378469&pnref=story";
				}				
				facebookService.baseSettingFacebook(document, 'script', 'facebook-jssdk');
			});
		}
	}