angular.module('EventService', [])

    .factory('EventService', ['$http', function($http) {

	return {
		// call to get all events
		get : function() {
			return $http.get('/api/events');
		},

		// call to POST and create a new event
		create : function(eventData) {
			 return $http.post('/api/events', eventData);
		},

		// call to DELETE a event
		delete : function(id) {
			return $http.delete('/api/events/' + id);
		}
	}
	
}]);
