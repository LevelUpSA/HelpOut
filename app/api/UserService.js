var resource = require('./ResourceManager');
var entity = 'user';

function UserService() {
}

UserService.prototype.register = function (user, callBack) {

    //validations will be here

    entityManager().save(user, function (err, createdUser) {
        callBack(err, createdUser);
    });
}

UserService.prototype.login = function(userInfo, callBack) {

    if(!userInfo.email || userInfo.email === '' ){
        callBack('Email not entered', '');
    }
    else if( !userInfo.password || userInfo.password === ''){
        callBack('Password not entered', '');
    } else {
        entityManager().find(userInfo, function (err, userData) {
            if (!err)
                delete userData.password;

            callBack(err, userData);
        });
    }
}

function entityManager() {
    return resource.getEntityByName(entity);
}

module.exports = exports = new UserService();