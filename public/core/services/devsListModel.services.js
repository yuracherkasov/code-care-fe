angular
  .module("ccApp").

  service('DevsList', function(){
    this.devsModel = [
        {
          firstname:    "Igor",
          lastname:     "firshman",
          image:        "/img/1.jpg",
          skills:       { PHP:        5,
                          JS:         3,
                          Analys:     3,
                          GulpJs:     3,
                          SCSS:       5,
                          React:      3 }
                                  
        },
        {
          firstname:    "Sergey",
          lastname:     "Ivanov",
          image:        "/img/2.jpg",
          skills:       { PHP:        3,
                          JS:         5,
                          Analys:     3,
                          GulpJs:     4,
                          SCSS:       5 }
                                 
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/3.jpg",
          skills:       { PHP:       5,
                          Laravel:   2,
                          Angularjs: 3,
                          GulpJs:    3,
                          SCSS:      5 }
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/4.jpg",
          skills:       { jQuery:    5,
                          Yii:       2,
                          Angularjs: 3,
                          React:     3,
                          Nodejs:    5 }
        },
        {
          firstname:    "Yuriy",
          lastname:     "Cherkasov",
          image:        "/img/5.jpg",
          skills:       { MySQL:     5,
                          Wordpress: 2,
                          JS:        3,
                          Cordova:   3,
                          Ionic:     5,
                          Wordpress: 2 }
                                
        },
        {
          firstname:    "Artem",
          lastname:     "Sidorov",
          image:        "/img/6.jpg",
          skills:       { MySQL:     5,
                          Wordpress: 2,
                          JS:        3,
                          Cordova:   3,
                          Ionic:     5,
                          GulpJs:    4,
                          SCSS:      5  }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/7.jpg",
          skills:       { jQuery:    5,
                          Yii:       2,
                          Angularjs: 3,
                          React:     3,
                          Nodejs:    5 }
                                  
        },
        {
          firstname:    "Igor",
          lastname:     "firshman",
          image:        "/img/8.jpg",
          skills:       { PHP:        5,
                          JS:         3,
                          Analys:     3,
                          GulpJs:     3,
                          SCSS:       5 }
                                  
        },
        {
          firstname:    "Sergey",
          lastname:     "Ivanov",
          image:        "/img/9.jpg",
          skills:       { PHP:        3,
                          JS:         5,
                          Analys:     3,
                          GulpJs:     4,
                          SCSS:       5 }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/1.jpg",
          skills:       { PHP:       5,
                          Laravel:   2,
                          Angularjs: 3,
                          GulpJs:    3,
                          SCSS:      5 }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/2.jpg",
          skills:       { jQuery:    5,
                          Yii:       2,
                          Angularjs: 3,
                          React:     3,
                          Nodejs:    5 }
                                  
        },
        {
          firstname:    "Igor",
          lastname:     "firshman",
          image:        "/img/1.jpg",
          skills:       { PHP:        5,
                          JS:         3,
                          HTML:       3,
                          JS:         3,
                          HTML:       3,
                          GulpJs:     3,
                          SCSS:       5 }
                                
        },
        {
          firstname:    "Sergey",
          lastname:     "Ivanov",
          image:        "/img/2.jpg",
          skills:       { PHP:        3,
                          JS:         5,
                          Analys:     3,
                          GulpJs:     4,
                          SCSS:       5 }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/3.jpg",
          skills:       { PHP:       5,
                          Laravel:   2,
                          Angularjs: 3,
                          GulpJs:    3,
                          SCSS:      5 }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/4.jpg",
          skills:       { jQuery:    5,
                          Yii:       2,
                          Angularjs: 3,
                          React:     3,
                          Nodejs:    5 }
                                
        },
        {
          firstname:    "Yuriy",
          lastname:     "Cherkasov",
          image:        "/img/5.jpg",
          skills:       { MySQL:     5,
                          Wordpress: 2,
                          JS:        3,
                          Cordova:   3,
                          Ionic:     5 }
                                  
        },
        {
          firstname:    "Artem",
          lastname:     "Sidorov",
          image:        "/img/6.jpg",
          skills:       { MySQL:     5,
                          Wordpress: 2,
                          JS:        3,
                          Cordova:   3,
                          Ionic:     5 }
                                
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/7.jpg",
          skills:       { jQuery:    5,
                          Yii:       2,
                          Angularjs: 3,
                          React:     3,
                          Nodejs:    5 }
                                  
        },
        {
          firstname:    "Igor",
          lastname:     "firshman",
          image:        "/img/8.jpg",
          skills:       { PHP:        5,
                          JS:         3,
                          Analys:     3,
                          GulpJs:     3,
                          SCSS:       5 }
                                  
        },
        {
          firstname:    "Sergey",
          lastname:     "Ivanov",
          image:        "/img/9.jpg",
          skills:       { PHP:        3,
                          JS:         5,
                          Analys:     3,
                          GulpJs:     4,
                          SCSS:       5 }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/3.jpg",
          skills:       { PHP:       5,
                          Laravel:   2,
                          Angularjs: 3,
                          GulpJs:    3,
                          SCSS:      5 }
                                  
        },
        {
          firstname:    "Ivan",
          lastname:     "Petrov",
          image:        "/img/4.jpg",
          skills:       { jQuery:    5,
                          Yii:       2,
                          Angularjs: 3,
                          React:     3,
                          Nodejs:    5 }
                                  
        },
        {
          firstname:    "Yuriy",
          lastname:     "Cherkasov",
          image:        "/img/5.jpg",
          skills:       { MySQL:     5,
                          Wordpress: 2,
                          JS:        3,
                          Cordova:   3,
                          Angularjs: 3,
                          React:     3,
                          Ionic:     5 }
                                  
        }                                             
      ]

    });
   