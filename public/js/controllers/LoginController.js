angular.module('LoginController', [])
    .controller('LoginController', ['$scope', 'LoginService', '$location' ,function($scope,  LoginService, $location) {
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