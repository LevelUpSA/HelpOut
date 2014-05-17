angular.module('LoginController', [])
    .controller('LoginController', ['$scope', '$http', '$location' , function($scope, $http, $location) {

    $scope.login = function(){

        $http.post('/api/login', $scope.user)
            .success(function(response){
                $scope.user = response;

        		console.log("user is " + $scope.user.username);
        		if($scope.user.username !== undefined || $scope.user != ''){
        			$location.path('/');
				}
				else
				{
					$location.path('/registration');
				}

            })
            .error(function(err){
                console.log('Error ' + err);
            });
    };


}]);