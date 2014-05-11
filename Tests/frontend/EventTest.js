/**
 * Created by sydney on 5/5/14.
 */
describe('should test eventController', function(){
    var scope, $httpBackend, controller;

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('HelpOutApp'));
    beforeEach(module('EventController'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();

        //declare the controller and inject our empty scope
        controller = $controller('EventController', {$scope: scope, _$httpBackend_: $httpBackend});
    }));

    it('should say subtitle is equal to Create an event', function(){

        expect(scope.subTitle).toBe('Create an event');
    });

    it('should save an event ',function(){});
    it('',function(){});
    it('',function(){});
    it('',function(){});
});

