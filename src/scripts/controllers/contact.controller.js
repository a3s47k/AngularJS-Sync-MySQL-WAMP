angular.module('contact.controller', []).controller("ContactController", _contactController)

function _contactController($scope, $http) {
	$scope.submit = function () {
		let datatmp = "username=admin&password=admin"
		$http({
			method: 'POST',
			url: 'http://localhost:7000/check',
			cache: false,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: datatmp,
		}).then(function (response) {
			console.log(response)
		}, function (error) {
			console.log('Lỗi 000 - Main: ' + error);
		});
	}
}
