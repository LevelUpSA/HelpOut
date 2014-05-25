var dburl = 'localhost/helpout';
var collections = ['events', 'user'];
var mongojs = require('mongojs');
var connection = mongojs.connect(dburl, collections);
var ObjectId = mongojs.ObjectId;
var events = connection.collection('events');

function Resource() {
}

Resource.prototype.entityManager = function(){
    return connection;
}

Resource.prototype.getEntityByName = function (name){
    return connection.collection(name);
}

Resource.prototype.find = function(entity, values){
    getEntityByName(entity).find(values);
};

Resource.prototype.resolveObjectId = function(id){
    return ObjectId(id);
}

module.exports = exports = new Resource();