(function () {

  angular.module('loc8rApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'thatisuday.ng-image-gallery']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/guestbook', {
        templateUrl: '/guestbook/guestbook.view.html',
        controller: 'guestBookCtrl',
        controllerAs: 'vm'
      })
      .when('/info', {
        templateUrl: '/info/info.view.html',
        controller: 'infoCtrl',
        controllerAs: 'vm'
      })
      .when('/tour', {
        templateUrl: '/tour/tour.view.html',
        controller: 'tourCtrl', 
        css: "stylesheets/photoStyle.css"
      })
      .when('/photos', {
        templateUrl: '/photos/photos.view.html',
        controller: 'photosCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

 angular
    .module('loc8rApp')
    .config(['$routeProvider', '$locationProvider', config]);
  


})();