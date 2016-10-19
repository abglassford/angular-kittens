(function() {
  'use strict';

  angular
    .module('kittens.components.comments', ['cats'])
    .controller('commentsController', commentsController)

    function commentsController () {
      this.test = 'Success'
    }

}());
