'use strict';

angular.module('kylesimukkaApp', ['ngRoute','ngResource','firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          portfolio: ['Imgur', function (Imgur) {
            return Imgur.list('simook');
          }]
        }
      })
      .when('/wishlist', {
        templateUrl: 'views/list.html',
        controller: 'WishCtrl',
        resolve: {
          auth: ['Auth', function (Auth) {
            return Auth.resolve();
          }],
          wishlist: ['Firebase', function (Firebase) {
            return Firebase.wishlist();
          }]
        }
      })
      .when('/auth', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        resolve: {
          auth: ['Auth', function (Auth) {
            return Auth.resolve();
          }]
        }
      })
      .when('/:albumId', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        resolve: {
          project: ['Imgur', '$route', function (Imgur, $route) {
            return Imgur.get($route.current.params.albumId);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant("IMGUR_CLIENT_ID","64732ca262c9dfd")
  .constant("FIREBASE", new Firebase('https://kylesimukka.firebaseio.com/'));