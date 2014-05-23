angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// registration page that will use the RegistrationController
		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		})

		// event page that will use the EventController
		.when('/event', {
			templateUrl: 'views/event.html',
			controller: 'EventController',
            access: {
                isPrivate: true
            }
		})

        // login page that will use the LoginController
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'MainController'
        })

        .otherwise({
            redirectTo:'/'
        });
	$locationProvider.html5Mode(true);

}]);
