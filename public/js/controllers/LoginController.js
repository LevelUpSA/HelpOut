angular.module('LoginController', [])
    .controller('LoginController', ['$scope', '$http', '$location', 'LoginService' ,function($scope, $http, $location, LoginService) {

//        $rootScope.isAuthenticated = LoginService.userExists();

        $scope.login = function(){
            $scope.loginErrorMessage = '';

            LoginService.login($scope.loginInfo).then(function(data){
                console.log(LoginService.userExists());
                console.log('user is ' + LoginService.getUser());
//                $scope.isAuthenticated = LoginService.userExists();
                $location.path('/');
            }, function(error){
                console.log('error', error);
                $scope.loginErrorMessage = error;
            });


        }

        $scope.isAuthenticatedUser = function(){
            return LoginService.userExists();
        }

    /*$scope.login = function(){
        $scope.loginError = '';
        $scope.user = [];
        $http.post('/api/login', $scope.loginInfo)
            .success(function(response){

                if(response.length == 0 ){
                    $scope.loginInfo.password = '';
                    $scope.loginError = 'Invalid Login Details';
                }
				else
				{
                    $scope.user = response;
                    $scope.isAuthenticated = true;
                    $location.path('/event');
                }

            })
            .error(function(err){
                console.log('Error ' + err.message);
                $scope.loginInfo.password = '';
                $scope.loginError = err.message;
            });
    };*/


}]);