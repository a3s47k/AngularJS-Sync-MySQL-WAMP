angular.module('about.controller', []).controller("AboutController", _aboutController)

function _aboutController($scope, $http) {

	$http({
		method: 'GET', // POST, PUT, DELETE
		url: 'http://localhost:7000/api/v1/page_content',
	}).then(function (response) {

		// Phân trang
		// $scope.totalItems = response.data.length;
		// $scope.lists = $scope.data.slice(
		// 	($scope.currentPage - 1) * $scope.itemsPerPage,
		// 	$scope.currentPage * $scope.itemsPerPage
		// );
		// Phân trang

	}, function (error) {
		console.log('Lỗi 003 - About: ' + error);
	});
}
