(function() {

  'use strict';

  angular
    .module('kittens.components.kitten', ['cats'])
    .controller('newKittenController', newKittenController)

    newKittenController.$inject = ['$location', 'kittenService']

    function newKittenController ($location, kittenService) {
      this.addKitten = function (kitten) {
        kittenService.kittenList.push(kitten);
        $location.path('/');
      };
    }

}());
