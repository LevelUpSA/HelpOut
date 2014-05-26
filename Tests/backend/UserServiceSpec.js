
userService = require('../../app/api/UserService');

describe('Tesing UserService', function () {
    var errMsg, data, flag;

    beforeEach(function(){
        errMsg = '';
        data = '';
        flag = false;
    });

    it('should test empty email address', function () {
        var detatils = getLoginDetails();
        delete detatils.email;

        runs(function(){
            userService.login(detatils, function(err, data){
               errMsg = err;
               flag = true;
            });
        }, 500);

        waitsFor(function() {
            return flag;
        }, "Flag should be set", 750);

        runs(function() {
            expect(errMsg).toEqual('Email not entered');
        });

    });

    it('should test empty password', function () {
        var detatils = getLoginDetails();
        delete detatils.password;

        runs(function(){
            userService.login(detatils, function(err, data){
               errMsg = err;
               flag = true;
            });
        }, 500);

        waitsFor(function() {
            return flag;
        }, "Flag should be set", 750);

        runs(function() {
            expect(errMsg).toEqual('Password not entered');
        });

    });

    function getLoginDetails() {
       return {
            email: 'sydney@gmail.com',
            password: '123'
        };
    }
});

