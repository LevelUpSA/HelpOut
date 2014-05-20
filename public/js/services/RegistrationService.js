angular.module('RegistrationService', [])
    .factory('RegistrationService', ['$http', '$q', 'LoginService', function ($http, $q, LoginService) {

        return {
            getUser: function (id) {
                var defer = $q.defer();

                $http.get('/api/registration' + id)
                    .success(function (user) {
                        defer.resolve(user);
                    }).error(function (error) {
                        defer.reject(error);
                    });
                return defer.promise;
            },

            register: function (user) {
                var defer = $q.defer();
                delete user.repassword;

                $http.post('/api/registration', user)
                    .success(function (response) {
                        defer.resolve(response);

                        console.log('RegistrationService is user' + response);
                        LoginService.setUser(response);
                    }).error(function (error) {
                        defer.reject(error);
                    });

                return defer.promise;
            },

            // call to DELETE a user
            delete: function (id) {
                return $http.delete('/api/registration/' + id);
            }
        }

    }]);

