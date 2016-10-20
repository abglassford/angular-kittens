(function() {
  'use strict';

  angular
    .module('kittens.components.comments', ['cats'])
    .controller('commentsController', commentsController);

  commentsController.$inject = ['$location', 'kittenService', '$routeParams']

  function commentsController ($location, kittenService, $routeParams) {
    this.id = $routeParams.id
    this.kitten = kittenService.kittenList[this.id - 1]
    this.show = false
    this.showFn = () => {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    }
    this.addComment = (comment) => {
      this.kitten.comments.push(comment)
      this.comment = null
      this.show = false
    }
  }

}());
