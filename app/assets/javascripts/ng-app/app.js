var definedApp = angular.module('Defined', [
    'ngRoute',
    'templates'
]);

definedApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });
    $locationProvider.html5Mode(true);
});
