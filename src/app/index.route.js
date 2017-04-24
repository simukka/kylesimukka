(function() {
  'use strict';

  angular
    .module('ks')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'app/landing/index.html',
        controller: 'LandingController',
        controllerAs: 'lCtrl'
      })

      ;
    $urlRouterProvider.otherwise('/');
  }

})();
