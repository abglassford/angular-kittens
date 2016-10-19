(function() {

  'use strict';

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
      templateUrl: 'js/components/main/main.kitten.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .otherwise('/');
  }

})();
