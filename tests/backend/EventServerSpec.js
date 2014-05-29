eventService = require('../../app/api/EventService');

describe('Test EventService', function () {
//    it('should test create event', function(done){});
    it('should test create event with empty name', function (done) {
        var event = getEvent();
        delete event.name;
        var msg = 'Name cannot be empty';
        createEvent(event, msg, done);
    });

    it('should test create event with empty location', function (done) {
        var event = getEvent();
        delete event.location;
        var msg = 'Location cannot be empty';
        createEvent(event, msg, done);
    });
    it('should test create event with empty date', function (done) {
        var event = getEvent();
        delete event.date;
        var msg = 'Date cannot be empty';
        createEvent(event, msg, done);
    });
    it('should test create event with empty time', function (done) {
        var event = getEvent();
        delete event.time;
        var msg = 'Time cannot be empty';
        createEvent(event, msg, done);
    });

//    it('should test update event', function(done){});
//    it('should test find  events', function(done){});

    function getEvent() {
        return{
            name: 'Awesome Event',
            location: 'Johannesburg',
            date: '2014/04/04',
            time: '19:30'
        }
    }

    function createEvent(event, msg, done) {
        eventService.create(event, function (err, data) {
            expect(err).toBe(msg);
            expect(data).toBe(event);
            return done();
        });
    }
});