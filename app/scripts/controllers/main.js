'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiApp
 */
angular.module('uiApp')
  .controller('MainCtrl', function ($scope, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.asc = 'true';

    dataService.success(function(data) {
    	$scope.data = data;
    	console.log($scope.data);
  	});

  });
