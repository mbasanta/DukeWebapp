'use strict';

/**
 * @ngdoc overview
 * @name dukeWebappApp
 * @description
 * # dukeWebappApp
 *
 * Main module of the application.
 */
angular
  .module('dukeWebappApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'esri.map',
    'oauth'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/access_token=:accessToken', {
        template: '',
        controller: function ($location, AccessToken) {
          var hash = $location.path().substr(1);
          AccessToken.setTokenFromString(hash);
          $location.path('/');
          $location.replace();
        }
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider.html5Mode(false).hashPrefix('!');

  });
