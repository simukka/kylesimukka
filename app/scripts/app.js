'use strict';

angular.module('kylesimukkaApp', ['ngRoute','ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          portfolio: ['Imgur', function(Imgur) {
            return Imgur.list('simook');
          }]
        }
      })
      .when('/:albumId', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        resolve: {
          project: ['Imgur', '$route', function(Imgur, $route) {
            return Imgur.get($route.current.params.albumId);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant("IMGUR_CLIENT_ID","64732ca262c9dfd");