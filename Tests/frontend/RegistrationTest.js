/**
 * Created by sydney on 5/17/14.
 */
describe('Test Registration Controller', function(){
    var $httpBackend, registrationController, $rootScope;

    beforeEach(module('HelpOutApp'));
    beforeEach(module('RegistrationController'));
    beforeEach(module('RegistrationService'));

    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');

        var $controller = $injector.get('$controller');
        registrationController = $controller('RegistrationController', {'$scope': $rootScope});

    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should say subtitle is Register to become a member', function(){
        expect($rootScope.subTitle).toBe('Register to become a member');
    });

    it('should check valid email address', function(){


    });



});