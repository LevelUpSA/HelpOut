userService = require('../../app/api/UserService');

describe('Tesing UserService', function () {

    it('should test empty email address', function (done) {
        var details = getLoginDetails();
        delete details.email;
        var message = 'Email not entered';
        login(details,done,message);
    });

    it('should test empty password', function (done) {
        var details = getLoginDetails();
        delete details.password;
        var message = 'Password not entered';
        login(details, done, message);
    });

    it('should test empty email', function(done){
        var user = getUser();
        delete user.email;
        var message = 'Email not entered';
        reister(user,message, done);
    });
    it('should test empty password', function(done){
        var user = getUser();
        delete user.password;
        var message = 'Password not entered';
        reister(user,message, done);
    });
    it('should test empty name', function(done){
        var user = getUser();
        delete user.name;
        var message = 'Name not entered';
        reister(user,message, done);
    });
    it('should test empty surname', function(done){
        var user = getUser();
        delete user.surname;
        var message = 'Surname not entered';
        reister(user, message, done);
    });
    it('should test empty country', function(done){
        var user = getUser();
        delete user.country;
        var message = 'Country not entered';
        reister(user, message, done);

    });
    it('should test empty city', function(done){
        var user = getUser();
        delete user.city;
        var message = 'City not entered';
        reister(user, message, done);
    });

    function getLoginDetails() {
        return {
            email: 'sydney@gmail.com',
            password: '123'
        };
    }

    function getUser(){
        return{
            email: 'sydney@gmail.com',
            password: '123',
            name: 'Sydney',
            surname: 'Chauke',
            country: 'South Africa',
            city: 'Johannesburg'
        }
    }

    function reister(user, message, done) {
        userService.register(user, function (err, data) {
            expect(err).toBe(message);
            expect(data).toBeFalsy();
            return done();
        });
    }

    function login(details, done, message) {
        userService.login(details, function (err, data) {
            expect(err).toEqual(message);
            expect(data).toBeFalsy();
            return done();
        });
    }
});