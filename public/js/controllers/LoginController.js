angular.module('LoginController', [])
    .controller('LoginController', ['$scope', '$location', 'LoginService' ,function($scope, $location, LoginService) {

        $scope.subTitle = "Sign in";

        $scope.login = function(){
            $scope.loginErrorMessage = '';

            LoginService.login($scope.loginInfo)
                .then(function(data){
                    $location.path('/');
                }, function(error){
                    console.log('error', error);
                    $scope.loginErrorMessage = error;
                });
        };

        $scope.isAuthenticatedUser = function(){
            return LoginService.userExists();
        };
}]);