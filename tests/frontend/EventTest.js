/**
 * Created by sydney on 5/5/14.
 */
describe('Test eventController', function(){
    var $httpBackend, eventController, $rootScope;

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('HelpOutApp'));
    beforeEach(module('EventController'));
    beforeEach(module('LoginService'));

    beforeEach(inject(function($injector){
        // set up the mocks
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        // the $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');
        eventController = $controller('EventController', {'$scope': $rootScope});

    }));

    // After each method it will execute this method
    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should say subtitle is equal to Create an event', function(){
        expect($rootScope.subTitle).toBe('Create an event');
    });

    it('should create an event',function(){

        expect($rootScope.isCreateBtn).toBeFalsy();
        expect($rootScope.eventAction).toBe('Add Event');
        expect($rootScope.subTitle).toBe('Create an event');
        // mocks the http.post call in createEvent method
        $httpBackend.expectPOST('/api/events').respond(201,'');
        expect(eventController).toBeDefined();

        $rootScope.createEvent();

        $httpBackend.flush();
    });

    it('should edit an event', function(){
        expect($rootScope.isCreateBtn).toBeFalsy();
        expect($rootScope.eventAction).toBe('Add Event');
        expect($rootScope.subTitle).toBe('Create an event');

        $rootScope.editEvent({'name': 'event name'});

        expect($rootScope.isCreateBtn).toBeTruthy();
        expect($rootScope.eventAction).toBe('Save Event');
        expect($rootScope.subTitle).toBe('Edit event');

    });

});

