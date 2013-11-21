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
      .when('/:albumId', {
        templateUrl: 'views/show.html',
        controller: 'AlbumCtrl',
        resolve: {
          album: ['Imgur', function(Imgur, $route) {
            return Imgur.list('simook').then(function(attributes) {
              return _.find(attributes.filtered, function(attribute) {
                return attribute.dim.dimension.name === $route.current.params.attributeId;
              });
            });;
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant("IMGUR_CLIENT_ID","64732ca262c9dfd");
