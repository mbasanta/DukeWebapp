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
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
