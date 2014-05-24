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
            },

            getCountries: function () {
                return{"AF": "Afghanistan", "AL": "Albania", "DZ": "Algeria", "AS": "American Samoa", "AD": "Andorra", "AO": "Angola", "AI": "Anguilla", "AQ": "Antarctica", "AG": "Antigua and Barbuda", "AR": "Argentina", "AM": "Armenia", "AW": "Aruba", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BS": "Bahamas", "BH": "Bahrain", "BD": "Bangladesh", "BB": "Barbados", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BM": "Bermuda", "BT": "Bhutan", "BO": "Bolivia", "BA": "Bosnia and Herzegovina", "BW": "Botswana", "BV": "Bouvet Island", "BR": "Brazil", "BQ": "British Antarctic Territory", "IO": "British Indian Ocean Territory"};
            }
        }

    }]);

