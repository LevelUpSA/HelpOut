angular.module('RegistrationService', []).factory('user', ['$http', function($http) {

	return {
		// call to get all users
		get : function() {
			return $http.get('/api/registration');
		},

		// call to POST and create a new user
		create : function(user) {
			return $http.post('/api/registration', user);
		},

		// call to DELETE a user
		delete : function(id) {
			return $http.delete('/api/registration/' + id);
		}
	}		

}]);

