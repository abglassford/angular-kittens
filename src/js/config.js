(function() {

  //'use strict';

  angular
    .module('kittens.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.home.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/new', {
      templateUrl: 'js/components/kitten/kitten.newKitten.html',
      controller: 'newKittenController',
      controllerAs: 'newCtrl'
    })
    .when('/comments/:id', {
      templateUrl: 'js/components/comments/comments.kittenComments.html',
      controller: 'commentsController',
      controllerAs: 'commentsCtrl'
    })
    .otherwise('/');
  }

})();
