userService = require('../../app/api/UserService');

describe('Tesing UserService', function () {

    it('should test empty email address', function (done) {
        var detatils = getLoginDetails();
        delete detatils.email;

        userService.login(detatils, function (err, data) {
            expect(err).toEqual('Email not entered');
            expect(data).toBeFalsy();
            return done();
        });
    });

    it('should test empty password', function (done) {
        var detatils = getLoginDetails();
        delete detatils.password;

        userService.login(detatils, function (err, data) {
            expect(err).toEqual('Password not entered');
            expect(data).toBeFalsy();
            return done();
        });
    });

    function getLoginDetails() {
        return {
            email: 'sydney@gmail.com',
            password: '123'
        };
    }
});