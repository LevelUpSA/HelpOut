angular.module('RegistrationController', [])
    .controller('RegistrationController', ['$scope', '$http' , function($scope, $http) {

	$scope.tagline = 'I am inside registration controller';

	$scope.createUser = function(){

		$http.post('/api/registration', $scope.user)
		.success(function(data){
			$scope.registration = data;
			$scope.user = {};
		})
		.error(function(err){
			console.log('Error ' + err);
		});
	};

	$scope.editUser = function(){
		var user = {};
		user['name'] = $scope.user.name;
		user['email'] = $scope.user.email;
		user['password'] = $scope.user.password;

		$http.post(user.id)
			.success(function(data){
				$scope.registration = data;
			});
	}
	$http.get('/api/registration')
		.success(function(data){
			$scope.registration = data;
		})
		.error(function(error){
			console.log('Error: '+ error + 'Could not retrieve user')
		});

}]);
