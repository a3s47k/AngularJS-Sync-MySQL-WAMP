angular.module('menu.controller', []).controller("MenuController", _menuController)

function _menuController($scope, $http) {
	$scope.sendRequestPageContent = function (parameter) {
		let tmp = parameter;
		let tmpJson = [];
		let resJson = [];
		$http({
			method: 'GET',
			url: 'http://localhost:7000/api/v1/page_content',
			cache: false,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		}).then(function (response) {
			
			tmpJson = response.data.data;
			
			for (const key in tmpJson) {
				if (tmpJson.hasOwnProperty(key)) {
					const element = tmpJson[key];
					if(element.id ===tmp){
						resJson.push(element)
					}
				}
			}
			console.log(resJson);
			
			$scope.page = eval(resJson[0].attributes);
		}, function (error) {
			console.log('Lỗi 001 - Menu: ' + error);
		});
	}
	$http({
		method: 'GET',
		url: '/db/menu.json'
	}).then(function (response) {
		$scope.data = eval(response.data.menu);

	}, function (error) {
		console.log('Lỗi 001 - Menu: ' + error);
	});
}
