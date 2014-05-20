angular.module('RegistrationController', [])
    .controller('RegistrationController', ['$scope' , '$location', 'RegistrationService', function ($scope, $location, RegistrationService) {

        $scope.subTitle = 'Register to become a member';

        $scope.register = function () {
            RegistrationService.register($scope.user)
                .then(function (user) {
                    $location.path('/profile');
                }, function (error) {

                });
        };


    }]);
