window.angular.module('main').service('homeDataService', ['$http', function ($http) {
	var service = {};

	service.getInfo = function () {
		return $http.get('app/components/home/homeData.json');
	};

	return service;
}]);
