(function() {

  //'use strict';

  angular
    .module('cats', [])
    .service('kittenService', KittenService);

  function KittenService () {

    if (!this.kittenList) {
      this.kittenList = [{
        name: 'Grumpy',
        image: 'http://placekitten.com/200/300',
        bio: `I'm a kitten`,
        comments: ['This cat is cute', 'My cat is cuter'],
        likes: 10,
        id: 1
      }];
    }
  }

}());
