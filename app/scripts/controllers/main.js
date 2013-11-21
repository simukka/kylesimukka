'use strict';

angular.module('mookApp')
  .controller('MainCtrl', function ($scope, portfolio) {
  	$scope.portfolio = portfolio;
	});
