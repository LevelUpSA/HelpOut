angular.module('MainController', []).controller('MainController', ['$scope', '$http' , function($scope, $http) {

	$scope.tagline = 'To the moon and back! Welcome to HelpOut App';

    if($scope.isAuthenticated === undefined){
        $scope.isAuthenticated = false;
    }

    $http.get('/api/events')
        .success(function(data){
            $scope.events = data;
        })
        .error(function(error){
            console.log('Error: '+ error + ' when retrieving events')
        });

}]);
