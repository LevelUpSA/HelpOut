module.exports = function (app) {

    // database configuration
    var dburl = 'localhost/helpout';
    var collections = ['events', 'user'];
    var mongojs = require('mongojs');
    var db = mongojs.connect(dburl, collections);
    var ObjectId = mongojs.ObjectId;

    // Application services
    var userService = require('./api/UserService')
    var eventService = require('./api/EventService');

    // ===========================================================
    // ========= server routes (Handles REST then delegate to the ServiceLayer)
    // ===========================================================

    app.post('/api/registration', function (req, res) {
        var user = req.body;
        registerUser(user, res);
    });

    app.post('/api/login', function (req, res) {
        var userLogingInfo = req.body;
        userLoging(userLogingInfo, res);
    });

    app.post('/api/events', function (req, res) {
        var event = req.body;
        if (event._id !== undefined) {
            updateEvent(event, res);
        } else {
            createEvent(event, res);
        }
        retrieveEvents(res);
    });

    app.get('/api/events', function (req, res) {
        retrieveEvents(res);
    });

    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    });

    // =========================================================
    // =====Helper Funtions
    // =========================================================
    function retrieveEvents(res) {
        eventService.find(function (err, events) {
            respond(res, events, err, 408);
        });
    }

    function respond(res, data, err, errorCode) {
        if (err) {
            res.jsonp(errorCode, erro);
        } else {
            res.json(data);
        }
    }

    function updateEvent(event, res) {
        eventService.update(event, function (err, data) {
            if (err) {
                res.jsonp(412, err);
            }
        });
    }

    function createEvent(event, res) {
        eventService.create(event, function (err, createdEvent) {
            if (err) {
                res.jsonp(417, err);
            }
        });
    }

    function userLoging(userLogingInfo, res) {
        db.user.find(userLogingInfo, function (err, userData) {
            if (err || !userData) {
                res.jsonp(417, { message: 'Error while trying to login' });
            } else {
                res.json(userData);
            }
        });
    }

    function registerUser(user, res) {
        userService.register(user, function (err, createdUser) {
            respond(res, createdUser, err, 417);
        });
    }
};
