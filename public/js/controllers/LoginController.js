angular.module('LoginController', [])
    .controller('LoginController', ['$scope', '$http', '$location' , function($scope, $http, $location) {

    $scope.login = function(){
        $scope.loginError = '';
        $http.post('/api/login', $scope.loginInfo)
            .success(function(response){
                $scope.user = response;

        		console.log("user is " + JSON.stringify($scope.user))  ;
        		if($scope.user.username !== undefined ){
                    $scope.isAuthenticated = true;
        			$location.path('/');
				}
				else
				{
//				   	$location.path('/register');
				}

            })
            .error(function(err){
                console.log('Error ' + err.message);
                $scope.loginInfo.password = '';
                $scope.loginError = err.message;
            });
    };


}]);