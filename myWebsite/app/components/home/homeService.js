window.angular.module('main').service('homeDataService', ['$http', function ($http) {
	var service = {};

	service.getInfo = function () {
		return $http.get('data/events.json').then(function (response) {
			return response.data.events.sort(function (a, b) {
				if (parseInt(a.theFieldToSortTheDate, 10) > parseInt(b.theFieldToSortTheDate, 10)) {
				    return 1;
				}
				if (parseInt(a.theFieldToSortTheDate, 10) < parseInt(b.theFieldToSortTheDate, 10)) {
					return -1;
				}
				
				// a must be equal to b
				return 0;
			});
		});
	};

	return service;
}]);
