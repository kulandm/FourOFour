'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'PeopleCtrl'
  });
}])

function PeopleCtrl($scope, $http) {    

    /*$http.get('json/tabledata.json').success(function(data) {
	      $scope.people = [];
	      $scope.people = data;
	    });*/
    $scope.loadRootFolder = function() {
        $http.get('http://sin32001031/ServiceBus/api/entities').success(function(data) {
	      $scope.rootfolder = [];
	      $scope.rootfolder = data;
          console.log(data);
	    });
    };
    $scope.loadPeopleDetail = function() {
        $http.get('json/tabledatadetail.json').success(function(data) {
	      $scope.people = [];
	      $scope.people = data;
	    });
    };

}