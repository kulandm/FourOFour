'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    //templateUrl: 'view1/view1.html',
    //controller: 'PeopleCtrl'
  });
}])

function PeopleCtrl($scope, $http) {  
    $scope.loading = true;
    var baseurl = 'http://suryanto3.cloudapp.net/api/entities';
    $scope.breadcrumps = [];
    $scope.loadRootFolder = function() {
        $http.get(baseurl).success(function(data) {
	      $scope.rootfolder = [];
	      $scope.rootfolder = data;
          $scope.breadcrumps = [];
          $scope.loading = false;
	    });
    };
    $scope.loadFolderDetail = function(masterId,name) {
        $http.get(baseurl +'/' + masterId).success(function(data) {
	      $scope.rootfolder = [];
	      $scope.rootfolder = data;
          $scope.loading = false;
	    });
    };
    $scope.refreshBreadcrump = function(index) {        
        var valuesArr = $scope.breadcrumps;

        for (var i = valuesArr.length; i > index-1; i--) 
           $scope.breadcrumps.splice(i+1,1);
    }
    $scope.clearLoadBreadcrump = function(masterId,name) {
        $scope.breadcrumps.push({'datas':{'name':name,'id':masterId}});
    }
    $scope.loadRootFolder();
}