	module.exports = function(app) {

        // database configuration
        var dburl = 'localhost/helpout';
        var collections = ['events','user'];
        var db = require('mongojs').connect(dburl, collections);

        // server routes ===========================================================
		

        app.post('/api/registration', function(req, res){
            var user = req.body;

            db.registration.save(user, function(err,user){
                if (err) 
                    res.send(err);

                console.log("user =" user);
                res.json(user);
            });
        });

        app.get('/api/registration', function(req, res) {
			User.find(function(err, user) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(user); // return all users in JSON format
			});
		});

        // route to handle creating (app.post)
        app.post('/api/events', function(req, res){
            var event = req.body; // {'name': 'event1'}

            db.events.save(event, function(err,eventData){
                if(err)
                    res.send(err);

                db.events.find(function(err,events){
                    if(err)
                        res.send(err);

                    console.log("saved user = "+ eventData.name);
                    res.json(events);
                });
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
