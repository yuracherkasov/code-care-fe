angular
	.module("ccApp").

directive('technologiesList', ['$timeout', '$window', 'API', function($timeout, $window, API) {
	return {
		restrict: 'E',
		templateUrl: 'public/templates/filter.directive.html',
		replace: true,
		link: function(scope, element, attrs) {
            scope.technologies = [];
            scope.categories = [];
			API.getTechnologies().then(function (response) {
				scope.technologies = response.data;
				response.data.map(function (item) {
					if(scope.categories.indexOf(item.category) == -1) {
                        scope.categories.push(item.category)
                    }
                });
            });

			var w = $window;
			var desktopWidth,
				position,
				activeIcon,
				flag;
			var responsiveWidth = 1400;
			var startHeight = 77;
			var normalHeight = 236;
			var changeEl = element.children();

			scope.header = "Filters";

			scope.windowResize = function() {
				desktopWidth = $window.innerWidth || doc.body.clientWidth;
				if (desktopWidth <= responsiveWidth) {
					scope.showbutton = false;
					scope.showList = false;
					scope.height = startHeight;
				} else {
					scope.showbutton = true;
					scope.showList = "web";
				};
			};

			scope.windowResize();

			angular.element(w).on('resize', function() {
				scope.windowResize();
				scope.$apply();
			});

			scope.callMenu = function() {
				if (scope.showbutton === true && desktopWidth <= responsiveWidth) {
					scope.showbutton = false;
					scope.showList = false;
					scope.height = startHeight;
				} else {
					scope.showbutton = true;
					if (desktopWidth <= responsiveWidth) {
						scope.height = normalHeight;
						scope.showList = false;
					}
				}
			};

			scope.showCategorie = function(name) {
				if (desktopWidth <= responsiveWidth) {
					scope.showbutton = false;
					$timeout(function() {
						scope.height = changeEl[0].clientHeight
					}, 250)
				}
				scope.showList = name;
			};

			element.on("click", function(event) {
				var target = event.target;
				if (target.tagName == 'IMG') {
					if (activeIcon) {
						activeIcon.classList.remove("active");
					}
					position = target.getAttribute('alt');
					flag = true;
					scope.header = position;
					scope.fixFilterParams(position, flag);
					target.classList.add("active");
					activeIcon = target;
				} else if (target.tagName == 'DIV') {
					scope.fixFilterParams(false, false);
					scope.header = "Filters";
					if (activeIcon) {
						activeIcon.classList.remove("active");
					}
				}
				scope.$digest();
			})
		}
	};
}])