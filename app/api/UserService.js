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

function entityManager() {
    return resource.getEntityByName(entity);
}

module.exports = exports = new UserService();