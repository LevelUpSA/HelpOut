module.exports = function (app) {

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
        userLoging(userLogingInfo, res, req);
    });

    app.post('/api/logout', function(req, res){
        delete req.session.isAuthenticated;
        res.json('Logged out');
    });

    app.post('/api/events', function (req, res) {
        if(isValidRequest(req,res)) {
            var event = req.body;
            if (event._id !== undefined) {
                updateEvent(event, res);
            } else {
                createEvent(event, res);
            }
            retrieveEvents(res);
        }
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
    function isValidRequest(req, res){
        if( !req.session.isAuthenticated || req.session.isAuthenticated == null) {
            res.jsonp(401, 'Authentication required to access this resource');
            return false;
        } else{
            return true;
        }
    }

    function retrieveEvents(res) {
        eventService.find(function (err, events) {
            respond(res, events, err, 408);
        });
    }

    function respond(res, data, err, errorCode) {
        if (err) {
            res.jsonp(errorCode, err);
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

    function userLoging(userLogingInfo, res,req) {
        userService.login(userLogingInfo, function(err, userData){
            if(userData){
                req.session.isAuthenticated = true;
            }
            respond(res,userData,err, 417);
        });
    }

    function registerUser(user, res) {
        userService.register(user, function (err, createdUser) {
            if(createdUser){
                req.session.isAuthenticated = true;
            }
            respond(res, createdUser, err, 417);
        });
    }
};
