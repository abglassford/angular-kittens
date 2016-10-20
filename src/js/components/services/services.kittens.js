(function() {

  'use strict';

  angular
    .module('cats', [])
    .service('kittenService', KittenService);

  function KittenService () {

    this.testMessage = 'Passing';

    if (!this.kittenList) {
      this.kittenList = [{
        name: 'Grumpy',
        image: 'http://placekitten.com/200/300',
        bio: `I'm a kitten`,
        likes: 10,
        id: 1
      }];
    }
  }

}());
