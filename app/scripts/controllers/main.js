'use strict';

/**
 * @ngdoc function
 * @name dukeWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dukeWebappApp
 */
angular.module('dukeWebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // try to match an access token in window.location.hash
    var token = (window.location.hash) ? window.location.hash.match(/#access_token=([^&]+)/) : false;
    if (token[1]) {
      $scope.token = token[1];
    }

  });
