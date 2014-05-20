module.exports = function (app) {

    // database configuration
    var dburl = 'localhost/helpout';
    var collections = ['events', 'user'];
    var mongojs = require('mongojs');
    var db = mongojs.connect(dburl, collections);
    var ObjectId = mongojs.ObjectId;

    // ===========================================================
    // ========= server routes (Handles REST then delegate to database)
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
            updateEvent(event);
        } else {
            createEvent();
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
    // =====Persistence functions below (HANDLES Database CRUD)
    // =========================================================
    function retrieveEvents(res) {
        db.events.find(function (err, events) {
            if (err)
                throw err;

            res.json(events);
        });
    }

    function updateEvent(event) {
        var id = ObjectId(event._id);
        delete event._id;
        db.events.update({"_id": id}, event, function (err, updated) {
            if (err || !updated)
                throw err;

        });
    }

    function createEvent() {
        db.events.save(event, function (err, eventData) {
            if (err) {
                throw err;
            }
        });
    }

    function userLoging(userLogingInfo, res) {
        db.user.find(userLogingInfo, function (err, userData) {
            if (err || !userData) {
                console.log('in her');
                res.jsonp(417, { message: 'Error while trying to login' });
            } else {
                console.log("user = " + JSON.stringify(userData));
                res.json(userData);
            }

        });
    }

    function registerUser(user, res) {
        db.user.save(user, function (err, user) {
            if (err)
                res.send(err);

            console.log("user = " + user);
            res.json(user);
        });
    }

};
