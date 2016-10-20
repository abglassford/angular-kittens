(function() {

  //'use strict';

  angular
    .module('kittens.components.main', ['cats'])
    .controller('mainController', mainController);

  mainController.$inject = ['$location', 'kittenService'];

  function mainController($location, kittenService) {
    this.kittenList = kittenService.kittenList;
    this.getComments = (id) => {
      $location.path(`/comments/${id}`);
    };

    this.like = (id) => {
      kittenService.kittenList[id - 1].likes++
    }
    this.dislike = (id) => {
      kittenService.kittenList[id - 1].likes--
    }

  }

})();
