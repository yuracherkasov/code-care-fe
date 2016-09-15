angular
  .module("ccApp")

.service('DevProfileModel', function() {
  this.devModel = 
  {
      _id: 4,
      index: "57daf70b5c592ebed10dbb91",
      image: "public/img/4.jpg",
      background: "full-height_image",
      name: "Ramsey Ramirez",
      position: "CMS Web Developer",
      about: "Dolore sunt duis ut consequat elit voluptate. Occaecat consequat cillum fugiat nisi veniam qui commodo. Adipisicing est amet elit aute officia proident duis excepteur amet aute minim elit. Qui nisi quis voluptate proident. Minim magna cillum reprehenderit est laboris anim tempor labore eu nisi laboris enim. Incididunt reprehenderit deserunt laborum excepteur sint laboris voluptate labore qui proident sunt commodo magna est.\r\nAnim cupidatat in adipisicing aliquip occaecat. Nulla pariatur incididunt minim exercitation ullamco ad qui deserunt velit minim pariatur. Eu occaecat velit aute consequat commodo ipsum anim Lorem consectetur sint labore ipsum consectetur.\r\n",
      skills: {
        PHP: 4,
        JS: 3,
        Analys: 3,
        GulpJs: 2,
        SCSS: 2,
        React: 2
      },
      projects: [
        {
          id: 2,
          name: "Mccall",
          image: "public/img/proj-exemp1.png",
          technologies: [
            "js",
            "angular",
            "wp",
            "node",
            "angular"
          ],
          about: "nulla cillum enim adipisicing ullamco eu nisi reprehenderit officia eu pariatur aliqua culpa mollit anim veniam laborum pariatur sunt sint"
        },
        {
          id: 4,
          name: "Horton",
          image: "public/img/proj-exemp3.png",
          technologies: [
            "wp",
            "html",
            "ionic",
            "yii",
            "angular"
          ],
          about: "sint nisi amet adipisicing aute nulla id sit culpa nulla culpa eiusmod quis qui et exercitation sint Lorem incididunt nostrud"
        },
        {
          id: 6,
          name: "Dollie",
          image: "public/img/proj-exemp3.png",
          technologies: [
            "js",
            "laravel",
            "angular",
            "sql",
            "angular"
          ],
          about: "elit sit aliqua aliqua duis deserunt adipisicing et ipsum ea voluptate non cupidatat voluptate officia consequat qui exercitation ea nulla"
        },
        {
          id: 3,
          name: "Elsie",
          image: "public/img/proj-exemp3.png",
          technologies: [
            "angular",
            "ionic",
            "jquery",
            "cordova",
            "react"
          ],
          about: "proident Lorem Lorem velit consectetur ea aliqua reprehenderit ullamco nostrud sit ad enim magna non minim velit sunt enim deserunt"
        }
      ]
    };
})