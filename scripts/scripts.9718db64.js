"use strict";angular.module("uiApp",["ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("uiApp").controller("MainCtrl",["$scope","dataService",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.asc="true",b.success(function(b){a.data=b,console.log(a.data)})}]),angular.module("uiApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("uiApp").factory("dataService",["$http",function(a){return a.get("data/data.json").success(function(a){return a}).error(function(a){return a})}]);