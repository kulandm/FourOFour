'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'PeopleCtrl'
  });
}])

function PeopleCtrl($scope, $http) {    

    $http.get('json/tabledata.json').success(function(data) {
	      $scope.people = [];
	      $scope.people = data;
	    });
    $scope.loadPeople = function() {
        $http.get('json/tabledata.json').success(function(data) {
	      $scope.people = [];
	      $scope.people = data;
	    });
    };
    $scope.loadPeopleDetail = function() {
        $http.get('json/tabledatadetail.json').success(function(data) {
	      $scope.people = [];
	      $scope.people = data;
	    });
    };

}