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
  });
