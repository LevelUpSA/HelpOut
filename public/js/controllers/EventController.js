/**
 * This module creates a controller that handle
 * all logic related to events then sends the HTTP request.
 */

angular.module('EventController', [])
    .controller('EventController', ['$scope', '$http' , function($scope, $http) {

	$scope.tagline = 'Create an event';

    $scope.createEvent = function(){

        $http.post('/api/events', $scope.event)
            .success(function(data){
                $scope.events = data;
                $scope.event = {};
            })
            .error(function(err){
                console.log('Error ' + err);
            });
    };

    $scope.editEvent = function(){
        var event = {};
        event['name'] = $scope.event.name;
        event['date'] = $scope.event.date;
        event['time'] = $scope.event.time;
        event['description'] = $scope.event.description;
        event['contact'] = $scope.event.contact;

        $http.update(event.id)
            .success(function(data){
                $scope.events = data;
        });
    }

    $http.get('/api/events')
        .success(function(data){
            $scope.events = data;
        })
        .error(function(error){
            console.log('Error: '+ error + ' when retrieving events')
        });
}]);
