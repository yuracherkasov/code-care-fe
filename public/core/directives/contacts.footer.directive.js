angular
	.module("ccApp").

directive('contactForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'public/templates/contacts.directive.html',
		replace: true
	};
})