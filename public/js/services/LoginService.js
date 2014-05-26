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
                            authenticatedUser = user[0];
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
                var deffered = $q.defer();

                $http.post('/api/logout').success(function(successful){
                    deffered.resolve('Logged out');
                }).error(function(err){
                    deffered.reject(err)
                });

                authenticatedUser = null;

                return deffered.promise;
            }
        }
    }]);
