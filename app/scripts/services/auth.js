'use strict';
var app = angular.module('kylesimukkaApp');

app.service('Auth', function ($firebaseAuth, FIREBASE) {
	var auth = $firebaseAuth(FIREBASE);

	this.resolve = function () {
		return auth;
	};

});
