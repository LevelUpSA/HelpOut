angular.module('LoginService', [])

    .factory('LoginService', ['$http','$q', function ($http, $q) {

        var authenticatedUser = null;

        return{
            login: function(loginInfo){

                var  deferred = $q.defer();
                $http.post('/api/login', loginInfo)
                    .success(function(user){
                        if(user.length == 1){
                            console.log('LoginService: user is ' + JSON.stringify(user));
                            deferred.resolve(user);
                            authenticatedUser = user;
                        } else {
                            deferred.reject('Incorrect login details');
                         }
                    }).error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getUser: function(){
                return authenticatedUser;
            },

            userExists: function(){
                return authenticatedUser != null;
            },

            logout: function(){
                authenticatedUser = null;
            }
        }
//        var service = {
//            loginError :'',
//            user :'',
//            isAuthenticated: false
//            };
//
//        service.login = function (loginInfo) {

//                .success(function (response) {
//
//                    if (response.length == 0) {
////                        $scope.loginInfo.password = '';
//                        service.loginError = 'Invalid Login Details';
//                    }
//                    else {
//                        service.user = response;
//                        service.isAuthenticated = true;
////                        $location.path('/event');
//                    }
//
//                })
//                .error(function (err) {
//                    console.log('Error ' + err.message);
////                    $scope.loginInfo.password = '';
//                    service.loginError = err.message;
//                });
//        }
//
//        return service;
    }]);
