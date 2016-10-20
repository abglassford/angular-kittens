(function() {

  'use strict';

  angular
    .module('kittens.components.kitten', ['cats'])
    .controller('newKittenController', newKittenController);

  newKittenController.$inject = ['$location', 'kittenService'];

  function newKittenController ($location, kittenService) {
    this.addKitten = function (kitten) {
      let newKitten = {
        name: kitten.name,
        image: kitten.image,
        bio: kitten.bio,
        comments: [],
        likes: 0,
        id: kittenService.kittenList.length + 1
      }
      kittenService.kittenList.push(newKitten);
      $location.path('/');
    };
  }

}());
