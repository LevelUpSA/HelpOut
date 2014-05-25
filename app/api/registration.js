/**
 * Created by sydney on 5/24/14.
 */

function register(req, res) {
    var user = req.body;

    registerUser(user, res);
}


function registerUser(user, res) {
    connection.user.save(user, function (err, user) {
        if (err)
            res.jsonp(err);

        console.log("user = " + JSON.stringify(user));
        res.json(user);
    });
}


//module.export.register  = register;