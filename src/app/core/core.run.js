(function() {
  'use strict';

  angular
    .module('ks.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
