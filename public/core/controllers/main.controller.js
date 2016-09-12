angular
  .module("ccApp")

  //angular scroll settings
  .value('duScrollOffset', -17)

  .controller('MainController', MainController);
  function MainController($timeout){
    //burger mobile menu 
    var doc = document;
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
      if (navMenu.classList.contains("show")){
          navMenu.classList.remove("show");
      };        
    };

}