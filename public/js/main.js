var app = angular.module("ccApp", ["ngAnimate"]);

	app.controller("mainCtrl", function($scope, $timeout){

		var doc = document;
		var desktopWidth = window.innerWidth || doc.body.clientWidth;
		var responsiveWidth = 1400;
		var startHeight = 77;
		var normalHeight = 236;

		var vm = this;

		$scope.height = startHeight;
		var	el = angular.element(doc.getElementById("filters-block")).children();

		vm.installHeight = function (){
			$timeout(function(){
				$scope.height = el[0].clientHeight;
			},250)
		};
		
		if (desktopWidth <= responsiveWidth){
			$scope.showbutton = false;
			$scope.showList = false;
					
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
			desktopWidth = window.innerWidth;			
			if(desktopWidth <= responsiveWidth){
				$scope.showbutton = false;									
			}	
			$scope.showList = name;
			vm.installHeight();
		};

		//moble menu 

		var body =  doc.body;
		var button = doc.getElementById('menu-btn');
		var navMenu = doc.getElementById('js-menu');

		button.addEventListener("click", showMenu);
		body.addEventListener("click", hideMenu);
		navMenu.addEventListener("click", hideMenu);

		function showMenu(){
			$timeout(function(){
				navMenu.classList.add("show");
			},100);
			
		};

		function hideMenu(e){
			var target = e.target || window.e.target;
				if (navMenu.classList.contains("show")){
					if(target.tagName != "A"){
						navMenu.classList.remove("show");
					};	
				};				
		};
	});

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