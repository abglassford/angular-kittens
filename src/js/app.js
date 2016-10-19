// sample angular code

(function() {

  'use strict';

  angular
    .module('kittens', [
      'ngRoute',
      'kittens.config',
      'kittens.components.main',
      'kittens.components.kitten'
    ]);

})();
