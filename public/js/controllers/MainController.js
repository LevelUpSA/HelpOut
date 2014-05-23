angular.module('MainController', [])
    .controller('MainController', ['$scope', '$http' , '$location', 'LoginService', 'EventService', function ($scope, $http, $location, LoginService, EventService) {

        $scope.isAuthenticated = function () {
            return LoginService.userExists();
        };

        $scope.getUser = function () {
            return LoginService.getUser();
        };

        EventService.retrieveAll()
            .then(function (events) {
                $scope.events = events;
            }, function (error) {
                console.log('Error: ' + error + ' when retrieving events')
            });

        $scope.logout = function () {
            LoginService.logout();
            $location.path('/');
        }

    }]);
