angular.module('LoginService', [])
    .factory('LoginService', ['$http','$q', function ($http, $q) {

        var authenticatedUser = null;

        return{
            login: function(loginInfo){
                var  deferred = $q.defer();
                $http.post('/api/login', loginInfo)
                    .success(function(user){
                        if(user.length == 1){
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

            setUser: function(user){
                authenticatedUser = user;
            },

            logout: function(){
                authenticatedUser = null;
            }
        }
    }]);
