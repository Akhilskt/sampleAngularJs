var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './views/login.html',
            controller: 'LoginController',
        })
        .state('register', {
            url: '/register',
            templateUrl: './views/register.html',
            controller: 'SignUpController'
        });
});
