var app = angular.module('app', ['ngRoute']);

//Config
app.config(function($routeProvider) {
  $routeProvider
  .when('/wisata',{
    templateUrl : 'assets/pages/wisata.html',
    controller  : 'wisata'
  })
  .otherwise({redirectTo: '/'});
});


//Factory
app.factory('factoryData', function($http) {
  var factoryData = {};

  factoryData.getData = function() {
    return $http.get('api/data-wisata.php');
  }

  return factoryData;
});


//Directives
app.directive('topHeader', function() {
  return {
    restrict    : 'A',
    templateUrl : 'assets/layout/header.html'
  }
});


//Controller
app.controller('wisata', function($scope, factoryData) {
  factoryData.getData().success(function(result) {
    $scope.wisata = result;
  });
});

//
