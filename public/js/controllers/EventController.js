

angular.module('EventController', []).controller('EventController', ['$scope', 'EventService' , function($scope, eventService) {

	$scope.tagline = 'Create an event';

    $scope.createEvent = function(){
        var event = {};
        event['name'] = $scope.event.name;

        eventService.create(event)
            .success(function(data){
                $scope.events = data;
        });
    }

    eventService.get()
        .success(function(data){
            $scope.events = data;
        }).error(function(error){
            console.log('Error: '+ error + ' when retrieving events')
        });
}]);
