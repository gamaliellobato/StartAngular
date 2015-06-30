(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
	$scope.clima = {};

	$http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK')
		.success(function(data){

			$scope.clima = data;

		});

	$scope.kelvinCelcius =  function (k){

		c = k - 273.15;
		c = Math.round( c*100) / 100;

		return c;

	};



}]);





})();