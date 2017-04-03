angular
	.module("ccApp").

controller('SocialController', SocialController);

function SocialController($scope, $timeout, $http, networkService) {

	$scope.stateAnimateClassName = "page-animation__slide-left";

	$scope.loadUpwork = function(name) {
		$scope.social = name;
	};

	$scope.network = {};
	$scope.social = "upwork";

	$scope.FBpostInit = function(name) {
		networkService.baseSettingFacebook(document, 'script', 'facebook-jssdk');
		$scope.social = name;
	}
	$scope.loadFacebookPost = function(name) {
		if (!$scope.postUrl) {
			$http({
				method: 'GET',
				url: "https://graph.facebook.com/1605650713073226/feed?fields=permalink_url&access_token=1000008076787760|IfGh42j1MgroV7xX-89Z9I8eoAk"
			}).then(function(response) {
				$scope.postUrl = response.data.data[0].permalink_url;
				$scope.FBpostInit(name);
			}, function(err) {
				$scope.postUrl = "https://www.facebook.com/permalink.php?story_fbid=1605129069792057&id=100008849378469&pnref=story";
				$scope.FBpostInit(name);
			});
		} else {
			$scope.social = name;
		}
	};

}