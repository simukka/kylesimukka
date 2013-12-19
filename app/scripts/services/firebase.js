'use strict';
var app = angular.module('kylesimukkaApp');

app.service('Firebase', function (FIREBASE, $firebase) {
	var ref = $firebase(FIREBASE);

	this.wishlist = function () {
		return ref.$child('wishlist');
	};
 
});
