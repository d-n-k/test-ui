angular.module('uiApp')
  .factory('dataService', function ($http) {
    'use strict';
    return $http.get('data/data.json')
        //http://www.mockaroo.com/api/generate.json?count=100&key=822bb770&datatype=jsonp
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });



  });
