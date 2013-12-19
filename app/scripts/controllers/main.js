'use strict';

var app = angular.module('kylesimukkaApp');

app.controller('MainCtrl', function ($scope, portfolio) {
	$scope.portfolio = portfolio;
});

app.controller('ShowCtrl', function ($scope, project) {
	$scope.project = project;
});

app.controller('WishCtrl', function ($scope, auth, wishlist) {
	$scope.auth = auth;
	$scope.wishlist = wishlist;
});

app.controller('AuthCtrl', function ($scope, auth) {
	$scope.auth = auth;
});