angular
	.module("ccApp").

		directive('contactForm', function(){
		 	return{
		 			restrict: 'E',
	        templateUrl: 'public/templates/contacts.directive.html',
	        replace: true,
	        scope: {},
	        // controller: function($scope, $timeout, $window){
	        // 	this.timeout = $timeout;
	        // 	this.window = $window;
	        // },

			 		link: function(scope, element, attrs){	
			 			scope.showpopup=false;
			 			scope.header = "We are here for you!";
			 			//scope.button = 

			 			scope.sendMessage = function(){
			 				scope.showpopup=false;
			 				scope.header = "Thank you!";
			 			}
			 		}	
		 		};
		 })