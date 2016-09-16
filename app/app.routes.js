window.angular.module('main').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/home');
    //
    // Now set up the states
    $stateProvider
    	.state('home', {
            url: '/home',
            templateUrl: 'components/home/homeView.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'components/projects/projectsView.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'components/contact/contactView.html'
        })
}]);