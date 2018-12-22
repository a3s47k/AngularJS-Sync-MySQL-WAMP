angular.module('home.controller', []).controller("HomeController", _homeController)

function _homeController($scope, $http) {

	$http({
		method: 'GET',
		url: 'http://localhost:7000/api/v1/product',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		cache: false
	}).then(function (response) {
		$scope.data = eval(response.data.data);
		
		
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
}
