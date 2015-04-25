$('.carousel').carousel({
    interval: 5000 //changes the speed
});

var mainApp = angular.module('mainApp',['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider.when('/main',
            {
                templateUrl:'../templates/main.html'
            });
        $routeProvider.when('/dashboard',
            {
                templateUrl:'../templates/dashboard.html'
            });
        $routeProvider.when('/charts',
            {
                templateUrl:'../templates/charts.html'
            });
        $routeProvider.when('/tables',
            {
                templateUrl:'../templates/tables.html'
            });
        $routeProvider.when('/forms',
            {
                templateUrl:'../templates/forms.html'
            });
        $routeProvider.when('/bootstrap-elements',
            {
                templateUrl:'../templates/bootstrap-elements.html'
            });
        $routeProvider.when('/bootstrap-grid',
            {
                templateUrl:'../templates/bootstrap-grid.html'
            });
        $routeProvider.when('/blank-page',
            {
                templateUrl:'../templates/blank-page.html'
            });
    });