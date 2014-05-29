var resource = require('./ResourceManager');
var entity = 'events';

function Event() {
}

Event.prototype.find = function (callBack) {
    entityManager().find(function (err, data) {
        if (err) {
            err = 'Error retriving events'
        }
        callBack(err, data)
    });
}

Event.prototype.update = function (event, callBack) {

    if (event.name == '' || event.name === undefined) {
        err = 'Event name cannot be Empty';
        callBack(err, event);
    } else {
        var id = resource.resolveObjectId(event._id);
        delete event._id;
        entityManager().update({"_id": id}, event, function (err, updated) {
            callBack(err, updated);
        });
    }
}

Event.prototype.create = function (event, callBack) {
    if (event.name == '' || event.name === undefined) {
        callBack('Name cannot be empty', event);
    } else if (event.location == '' || event.location === undefined) {
        callBack('Location cannot be empty', event);
    } else if (event.date == '' || event.date === undefined) {
        callBack('Date cannot be empty', event);
    } else if (event.time == '' || event.time === undefined) {
        callBack('Time cannot be empty', event);
    } else {
        entityManager().save(event, function (err, createdEvent) {
            callBack(err, createdEvent);
        });
    }

}

function entityManager() {
    return resource.getEntityByName(entity);
}

module.exports = exports = new Event();