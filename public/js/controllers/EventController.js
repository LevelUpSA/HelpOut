/**
 * This module creates a controller that handle
 * all logic related to events then sends the HTTP request.
 */

angular.module('EventController', [])
    .controller('EventController', ['$scope', '$http', 'LoginService', function ($scope, $http, loginService) {

        $scope.subTitle = 'Create an event';
        $scope.eventEdit = 'this';
        $scope.isCreateBtn = false;
        $scope.eventAction = "Add Event";

        $scope.createEvent = function () {

            $scope.event['user'] = loginService.getUser().email;
            $http.post('/api/events', $scope.event)
                .success(function (response) {
                    $scope.events = response;
                    $scope.isCreateBtn = false;
                    $scope.event = {};
                })
                .error(function (err) {
                    console.log('Error ' + JSON.stringify(err));
                });
        };

        $scope.changeIsCreateBtn = function () {
            $scope.isCreateBtn = true;
            $scope.subTitle = 'Create an event';
        };

        $scope.cancelCreateEvent = function () {
            $scope.event = {};
            $scope.isCreateBtn = false;
        };

        $scope.editEvent = function (event) {
            $scope.event = event;
            $scope.isCreateBtn = true;
            $scope.eventAction = "Save Event";
            $scope.subTitle = 'Edit event';
        }

    }]);
