angular
	.module("ccApp").

directive('projectSlider', ['$interval', function($interval) {
	return function(scope, element, attrs) {

		var imgs = element.find('img');
		var image = imgs[0];
		var image2 = imgs[1];

		var animationInterval;

		scope.runInterval = function(){

			animationInterval = $interval(function(){
			image2.classList.toggle("step1");
			image2.classList.toggle("step2");
			image.classList.toggle("step2");
			image.classList.toggle("step1");
			}, 7000)
		}
		scope.runInterval()

		scope.stopInterval = function(){
			$interval.cancel(animationInterval);
		};

		element.on("mouseenter", function(e){
			e.preventDefault();
			scope.stopInterval();
		});
		element.on("mouseleave", function(){
			scope.runInterval();
		});		
	}
}]);