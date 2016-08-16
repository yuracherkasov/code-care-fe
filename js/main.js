var app = angular.module("ccApp", ["ngAnimate"]);

	app.controller("filtersCtrl", function($scope, $timeout){

		var desktopWidth = window.innerWidth || document.body.clientWidth;
		var responsiveWidth = 1400;
		var startHeight = 77;
		var normalHeight = 236;

		var vm = this;

		$scope.height = startHeight;
		var	el = angular.element(document.getElementById("filters-block")).children();

		vm.installHeight = function (){
			$timeout(function(){
				$scope.height = el[0].clientHeight;
			},250)
		};
		
		if (desktopWidth <= responsiveWidth){
			$scope.showbutton = false;
			$scope.showList = false;
			el.find('ul').css('position', 'absolute');
					
		} else {
			$scope.showbutton = true;
			$scope.showList = "web";
		};

		$scope.callMenu = function(){
			if($scope.showbutton === true && desktopWidth <= responsiveWidth){
				$scope.showbutton = false; 
				$scope.showList = false;
				$scope.height = startHeight;

			}	else {
				$scope.showbutton = true;
				$scope.height = normalHeight;
				if (desktopWidth <= responsiveWidth){
					$scope.showList = false;
				}
			}		
		};

		$scope.showCategorie = function(name){			
			if(desktopWidth <= responsiveWidth){
				$scope.showbutton = false;									
			}	
			$scope.showList = name;
			vm.installHeight();
		};

	})

		 // app.directive('filterList', function(){
		 // 	return{
		 // 		restrict: 'E',
	  //       templateUrl: 'js/filter.html',
	  //       replace: true,
	  //       controller: 'filtersCtrl', 
		 // 		link: function($scope, element, attrs){

		 // 			}					
		 // 		}
		 // })