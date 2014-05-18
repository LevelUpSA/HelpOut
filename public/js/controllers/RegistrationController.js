angular.module('RegistrationController', [])
    .controller('RegistrationController', ['$scope', '$http' ,'$location', function($scope, $http, $location) {

	$scope.subTitle = 'Register to become a member';

	$scope.createUser = function(){

		$http.post('/api/registration', $scope.user)
		.success(function(data){
			$scope.user = data;
            $location.path('/event');
		    $scope.isAuthenticated = true;
		})
		.error(function(err){
			console.log('Error ' + err);
		});
	};


}]);
