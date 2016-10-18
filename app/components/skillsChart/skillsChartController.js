window.angular.module('main').controller('SkillsChartController', ['$scope', 'skillsChartDataService', function ($scope, skillsChartDataService) {
    $scope.skills = [];

    skillsChartDataService.getInfo().then(function (response) {
        $scope.skills = response.data.charts;
    }).catch(function () {
        // TODO: show error message
    });
}]);