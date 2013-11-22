'use strict';

var app = angular.module('kylesimukkaApp');

app.controller('MainCtrl', function ($scope, portfolio) {
	$scope.portfolio = portfolio;
});

app.controller('ShowCtrl', function ($scope, project) {
	$scope.project = project;
});