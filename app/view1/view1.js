'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    //templateUrl: 'view1/view1.html',
    //controller: 'PeopleCtrl'
  });
}])

/*function PeopleCtrl($scope, $http) {  
    var baseurl = 'http://suryanto3.cloudapp.net/api/entities';
    $scope.breadcrumps = [];
    //$scope.loadRootFolder();
    $scope.loadRootFolder = function() {
        $http.get(baseurl).success(function(data) {
	      $scope.rootfolder = [];
	      $scope.rootfolder = data;
          console.log(data);
	    });
    };
    $scope.loadFolderDetail = function(masterId,name) {
        console.log(masterId);
        $http.get(baseurl +'/' + masterId).success(function(data) {
	      $scope.rootfolder = [];
	      $scope.rootfolder = data;
          $scope.breadcrumps.push({'name':name});
	    });
    };

}*/