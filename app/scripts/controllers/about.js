'use strict';

/**
 * @ngdoc function
 * @name dukeWebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dukeWebappApp
 */
angular.module('dukeWebappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
