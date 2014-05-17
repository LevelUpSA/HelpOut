	module.exports = function(app) {

        // database configuration
        var dburl = 'localhost/helpout';
        var collections = ['events','user'];
        var mongojs = require('mongojs');
        var db = mongojs.connect(dburl, collections);
        var ObjectId = mongojs.ObjectId;
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

       app.post('/api/login', function(req, res){
            var userLogingInfo = req.body;

            console.log("user " + userLogingInfo.username);

            db.user.find(userLogingInfo, function(err, userData){
                if (err || !userData){
                    console.log("Con "+ err)
                    res.send(err);
                }
                    

                console.log("user = " + JSON.stringify(userData));
                res.json(userData);
            });
        });

        // route to handle creating or editing event(app.post)
        app.post('/api/events', function(req, res){
            var event = req.body; // {'name': 'event1'}

            if(event._id !== undefined){
                //update event
                var id = ObjectId(event._id);
                delete event._id;
                db.events.update({"_id": id}, event, function(err, updated) {
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
