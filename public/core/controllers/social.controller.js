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

	window.fbAsyncInit = function() {
		FB.init({
			appId: '1000008076787760',
			//appId: '174816672967950',
			status: true,
			cookie: true,
			xfbml: false,
			version: 'v2.8'
		});
	};



	//full_picture,updated_time,type,target,description  created_time,description,from,name,permalink_url,link,story,target 1604750703163227_1605129069792057
	//var pageAccessToken = '174816672967950|i_uRl0u2Qg1tgXdUPqX-RrrNk50';
	// fields: 'full_picture,created_time,description,from,name,permalink_url,link,story,target',

	facebookService.baseSettingFacebook(document, 'script', 'facebook-jssdk');

	$scope.loadFacebookPost = function(name) {
		// FB.getLoginStatus(function(response) {
		// 	if (response.status === 'connected') {
		// 		console.log('Logged in');
		// 	} else {
		// 		//FB.login();


		FB.api("/100008849378469", {
			fields: 'posts.limit(1)'
		}, function(response) {
			console.log(response)
			var setting = response.posts.data[0].id
			FB.api('/' + setting, {
				//metadata: 1,
				// fields: 'full_picture,created_time,description,from,name,permalink_url,link,story,target,picture'
				fields: 'created_time,description,from,permalink_url,story,picture'
			}, function(result) {
				$scope.network = result;
				$scope.social = name;
				$scope.$apply();
			})
		})


		// 	}
		// });

		// $http({
		// 	method: 'GET',
		// 	//url: 'https://graph.facebook.com/oauth/access_token?client_id=174816672967950&client_secret=884f52b0cce3257eb6b66e4af6748b36&grant_type=client_credentials'
		// 	url: 'https://graph.facebook.com/100008849378469?fields=posts&access_token=174816672967950|i_uRl0u2Qg1tgXdUPqX-RrrNk50'
		// 		//url: 'https://graph.facebook.com/v2.8/100008849378469/accounts?access_token=174816672967950|i_uRl0u2Qg1tgXdUPqX-RrrNk50'
		// }).then(function(response) {
		// 	console.log(response)
		// });
	}

	// facebookService.getMyLastName()
	// 	.then(function(response) {
	// 		$scope.last_name = response.last_name;
	// 		console.log($scope.last_name)
	// 	}, function(err){
	// 		console.log(err)
	// 	});



}