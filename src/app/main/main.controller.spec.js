(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('ks'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should define 4 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 4).toBeTruthy();
    });
  });
})();
