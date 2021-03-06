    // modules =================================================
	var express = require('express');
	var app     = express();
	var port = process.env.PORT || 8000; // set our port

    app.configure(function() {

        app.use(express.cookieParser());                    // setting up session
        app.use(express.session({secret: 'trewq1234'}));    // setting up session secret id
		app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 					// log every request to the console
		app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
		app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT
	});

	// routes ==================================================
	require('./app/routes')(app); // configure our routes

	// start app ===============================================
	app.listen(port);										// startup our app at http://localhost:8000
	console.log('Server started on port ' + port); 			// shoutout to the user
	exports = module.exports = app; 						// expose app

