angular.module('EventService', [])

    .factory('EventService', ['$http','$q', function($http, $q) {

	return {
		// call to get all events
		retrieveAll : function() {
            var defer = $q.defer();

            $http.get('/api/events')
                .success(function(events){
                    defer.resolve(events);
                }).error(function(error){
                    defer.reject(error);
                });

			return defer.promise;
		},

		// call to POST and create a new event
		create : function(eventData) {
			 return $http.post('/api/events', eventData);
		},

		// call to DELETE a event
		delete : function(id) {
			return $http.delete('/api/events/' + id);
		},

        update : function(id){
            return $http.update('/api/events/' + id);
        }
	}
	
}]);
