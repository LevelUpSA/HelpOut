	module.exports = function(app) {

        // database configuration
        var dburl = 'localhost/helpout';
        var collections = ['events','user'];
        var db = require('mongojs').connect(dburl, collections);

        // server routes ===========================================================


        app.post('/api/registration', function(req, res){
            var user = req.body;

            db.user.save(user, function(err, user){
                if (err)
                    res.send(err);

                console.log("user = " + user);
                res.json(user);
            });
        });

        app.get('/api/registration', function(req, res) {
			db.user.findOne(function(err, user) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(user); // return all users in JSON format
			});
		});

        // route to handle creating or editing event(app.post)
        app.post('/api/events', function(req, res){
            var event = req.body; // {'name': 'event1'}

            if(event._id !== undefined){
                //update event
                db.events.update({"_id":event._id},{$set: event }, function(err, updated) {
                    if( err || !updated )
                        res.send(err);
                });

            } else{
                //create a new event
                db.events.save(event, function(err,eventData){
                    if(err){
                        res.send(err);
                    }
                });
            }

            db.events.find(function (err, events) {
                if (err){
                    res.send(err);
                } else {
                    res.json(events);
                }
            });
        });

        app.get('/api/events', function(req, res){
            db.events.find(function(err,events){
                if(err)
                    res.send(err);

                res.json(events);
            });
        });

        // route to handle delete (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});
	};
