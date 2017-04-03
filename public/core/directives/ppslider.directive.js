angular
	.module("ccApp").

directive('projectSlider', function () {
		return {
			restrict: 'E',
			scope: {
				images: '=',
				interval: '='
			},
			templateUrl: '/public/templates/slider.directive.html',
			link: function (scope, element) {
					scope.element = element;
			},
			controller: function ($scope, $timeout) {
          $scope.$watch('element', function (element) {
							if (!element)
									return;

							$timeout(function () {
								$($scope.element).children().eq(0).carousel();
							});
          });
      }
		}
});