angular.module('RegistrationController', [])
    .controller('RegistrationController', ['$scope', '$http' , function($scope, $http) {

	$scope.subTitle = 'Register to become a member';

	$scope.createUser = function(){

		$http.post('/api/registration', $scope.user)
		.success(function(data){
			$scope.user = data;
		})
		.error(function(err){
			console.log('Error ' + err);
		});
	};


}]);
