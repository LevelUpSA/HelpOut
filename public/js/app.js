var app = angular.module('HelpOutApp',
    ['ngRoute', 'ngAnimate', 'appRoutes', 'MainController', 'RegistrationController','EventController', 'LoginController', 'SearchController',
     'LoginService','ApplicationService', 'RegistrationService','EventService']);

app.directive('goClick', function ($location) {
    return function (scope, element, attrs) {
        var path;

        attrs.$observe('goClick', function (val) {
            path = val;
        });

        element.bind('click', function () {
            scope.$apply(function () {
                $location.path(path);
            });
        });
    }
});

app.run(function(LoginService, ApplicationService){

});