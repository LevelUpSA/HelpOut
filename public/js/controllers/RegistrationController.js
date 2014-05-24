angular.module('RegistrationController', [])
    .controller('RegistrationController', ['$scope' , '$location', 'RegistrationService', function ($scope, $location, RegistrationService) {

        $scope.subTitle = 'Register to become a member';
        $scope.isNextClicked = false;
        $scope.countries = [{name: 'Afghanistan', code: 'AF'},
                            {name: 'Åland Islands', code: 'AX'},
                            {name: 'Albania', code: 'AL'},
                            {name: 'Algeria', code: 'DZ'},
                            {name: 'American Samoa', code: 'AS'},
                            {name: 'AndorrA', code: 'AD'}, ];

        $scope.interests = ['Auctions','Fund Raising','Childrens Home'];
        $scope.my = {
            initerest: []
        };
        $scope.selectedCountry = $scope.countries[0];

        $scope.register = function () {

            var user = $scope.user;
            user['interests'] = $scope.my.interest;
            console.log(user);

            RegistrationService.register($scope.user)
                .then(function (user) {
                    $location.path('/profile');
                }, function (error) {

                });
        };

        $scope.goToNext = function(){
            $scope.isNextClicked = true;
        };
        $scope.goBack = function(){
            $scope.isNextClicked = false;
        };

    }]);
