(function() {

  'use strict';

  angular
    .module('kittens.components.main', ['cats'])
    .controller('mainController', mainController);

  mainController.$inject = ['$location', 'kittenService'];

  function mainController($location, kittenService) {
    this.kittenList = kittenService.kittenList;
    this.getComments = (id) => {
      $location.path(`/comments/${id}`);
    }

  }

})();
