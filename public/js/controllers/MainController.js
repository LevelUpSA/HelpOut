angular.module('MainController', []).controller('MainController', ['$scope', '$http' , '$location','LoginService', function ($scope, $http, $location, LoginService) {

    $scope.tagline = 'To the moon and back! Welcome to HelpOut App';


    $scope.isAuthenticated = function(){
        return LoginService.userExists();
    }

    $http.get('/api/events')
        .success(function (data) {
            $scope.events = data;
        })
        .error(function (error) {
            console.log('Error: ' + error + ' when retrieving events')
        });

    $scope.logout = function(){
        LoginService.logout();
        $location.path('/');
    }

}]);
