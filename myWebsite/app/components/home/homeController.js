window.angular.module('main').controller('HomeController', ['$scope', '$rootScope', '$stateParams', 'homeDataService', function ($scope, $rootScope, $stateParams, mockedDataService) {
	$scope.info = [];
	$rootScope.pageHeaderTitle = "About"

	homeDataService.getInfo().then(function (info) {
		$scope.info = info;
	}).catch(function () {
		// TODO: show error message
	});
}]);