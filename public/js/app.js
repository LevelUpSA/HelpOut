var app = angular.module('HelpOutApp',
    ['ngRoute', 'ngAnimate', 'appRoutes', 'MainController', 'RegistrationController', 'EventController', 'LoginController', 'SearchController', 'LoginService','ApplicationService']);

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
    console.log('is in');
    if(LoginService.userExists()){
        ApplicationService.makeReady();
        $scope.isAuthenticated = LoginService.userExists();
        console.log('is auth' + LoginService.userExists());
    }
});