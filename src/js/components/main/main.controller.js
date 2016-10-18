(function() {

  'use strict';

  angular
    .module('kittens.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$rootScope', '$location'];

  function mainController($scope, $rootScope, $location) {

    this.addKitten = function (kitten) {
      console.log('hello');
      $rootScope.kittenList.push(kitten)
      $location.path('/')
    }

    if (!$rootScope.kittenList) {
      $rootScope.kittenList = [{
        name: 'Grumpy',
        image: 'http://placekitten.com/200/300',
        bio: `I'm a kitten`,
        likes: 102982
      }]
    }

  }

})();
