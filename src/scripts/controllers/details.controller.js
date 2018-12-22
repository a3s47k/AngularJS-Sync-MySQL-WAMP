angular.module('details.controller', []).controller("DetailsController", _detailsController)

function _detailsController($scope, $http, $stateParams) {
	$http({
		method: 'GET',
		url: 'http://localhost:7000/api/v1/product/' +$stateParams.id
	}).then(function (response) {
		console.log(response)
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
}
