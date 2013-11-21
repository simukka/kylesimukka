'use strict';

angular.module('mookApp', ['ngRoute','ngResource'])
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant("IMGUR_CLIENT_ID","64732ca262c9dfd");
