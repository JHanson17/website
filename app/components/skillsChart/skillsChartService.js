window.angular.module('main').service('skillsChartDataService', ['$http', function ($http) {
    var service = {};

    service.getInfo = function () {
        return $http.get('app/components/skillsChart/skillsChartData.json');
    };

    return service;
}]);