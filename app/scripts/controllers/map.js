'use strict';

/**
 * @ngdoc function
 * @name dukeWebappApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the dukeWebappApp
 */
angular.module('dukeWebappApp')
  .controller('MapCtrl', function ($scope) {
    $scope.map = {
      center: {
        lng: -84.5,
        lat: 38.5
      },
      zoom: 12
    };
    $scope.test = 'Test';
  });
