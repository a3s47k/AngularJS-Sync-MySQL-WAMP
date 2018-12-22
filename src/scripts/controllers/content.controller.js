angular.module('content.controller', []).controller("ContentController", _contentController)

function _contentController($scope, $http) {
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
}
