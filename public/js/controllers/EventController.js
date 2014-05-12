/**
 * This module creates a controller that handle
 * all logic related to events then sends the HTTP request.
 */

angular.module('EventController', [])
    .controller('EventController', ['$scope', '$http' ,'$location', function($scope, $http, $location) {

	$scope.subTitle = 'Create an event';
    $scope.eventEdit = 'this';
    $scope.isCreateBtn = false;
    $scope.eventAction = "Add Event";
    $scope.createEvent = function(){
        $http.post('/api/events', $scope.event)
            .success(function(data){
                $scope.events = data;
                $scope.isCreateBtn = false;
                $scope.event = {};
            })
            .error(function(err){
                console.log('Error ' + err);
            });
    };

    $scope.changeIsCreateBtn = function(){
        $scope.isCreateBtn = true;
        $scope.subTitle = 'Create an event';
    };

    $scope.cancelCreateEvent = function(){
        $scope.event = {};
        $scope.isCreateBtn = false;
    };

    $scope.editEvent = function(event){
       $scope.event = event;
        $scope.isCreateBtn = true;
        $scope.eventAction = "Save Event";
        $scope.subTitle = 'Edit event';
    }

}]);
