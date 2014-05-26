/**
 * Created by sydney on 5/5/14.
 */
describe('Test LoginController', function(){
    var $httpBackend, loginController, $rootScope, loginService;

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('HelpOutApp'));
    beforeEach(module('LoginController'));
    beforeEach(module('LoginService'));

    beforeEach(inject(function(LoginService) {
        loginService = LoginService;
    }));


    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');
        loginController = $controller('LoginController', {'$scope': $rootScope});

    }));

    // After each method it will execute this method
    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should say subtitle is equal to Create an event', function(){
        expect($rootScope.subTitle).toBe('Sign in');
    });

    it('should login the user', function(){
        // GIVEN
        var loginInfo = {
            surname : 'sydney@',
            password : '1234'
        };

        expect(loginController).toBeDefined();
        $httpBackend.expectPOST('/api/login').respond(201, 'ok');

        //WHEN
        $rootScope.login(loginInfo);
        $httpBackend.flush();

    });

});
