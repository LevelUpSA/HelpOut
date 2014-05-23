angular.module('RegistrationController', [])
    .controller('RegistrationController', ['$scope' , '$location', 'RegistrationService', function ($scope, $location, RegistrationService) {

        $scope.subTitle = 'Register to become a member';
        $scope.isNextClicked = false;
        $scope.register = function () {
            RegistrationService.register($scope.user)
                .then(function (user) {
                    $location.path('/profile');
                }, function (error) {

                });
        };

        $scope.goToNext = function(){
            $scope.isNextClicked = true;
        };

    }]);
