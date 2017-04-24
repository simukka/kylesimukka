(function() {
  'use strict';

  angular
    .module('ks')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController() {
    var vm = this;

    vm.projects = ['a','b','c'];
    vm.passions = ['e','f','g']

  }
})();
