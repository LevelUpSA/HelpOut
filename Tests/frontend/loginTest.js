/**
 * Created by sydney on 5/5/14.
 */
describe('Test eventController', function(){
    var $httpBackend, loginController, $rootScope;

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('HelpOutApp'));
    beforeEach(module('LoginController'));

    beforeEach(inject(function($injector){
        // set up the mocks
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        // the $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');
        eventController = $controller('LoginController', {'$scope': $rootScope});

    }));

    // After each method it will execute this method
    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should say subtitle is equal to Create an event', function(){
        expect($rootScope.subTitle).toBe('Sign in');
    });

});
