'use strict';
var app = angular.module('kylesimukkaApp');

app.service('Imgur', function($resource, $http, IMGUR_CLIENT_ID) {
	var base = 'https://api.imgur.com/3/';
	var albumList = null;

	$http.defaults.headers.common['Authorization'] = 'Client-ID '+IMGUR_CLIENT_ID;
	$http.defaults.useXDomain = true

	var album = function(albumId){
		var Album = $resource(base + 'album/:albumId', {albumId:'@id'});

		return Album.get({albumId: albumId});
	};

	var getAlbums = function(userId){
		var Albums = $resource(base + 'account/:userId/albums/ids', {userId:'@id'});

		return Albums.get({userId: userId});
	};

	this.get = function(albumId){
		return album(albumId);
	};

	this.list = function(userId){
		if(albumList === null){
			albumList = getAlbums(userId).$promise.then(function(albums){
				return albums.data.map(function(albumId){
					return album(albumId);
				})
			});
		}
		return albumList;
	};
});
