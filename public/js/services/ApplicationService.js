angular.module('ApplicationService', [])

    .factory('ApplicationService', ['$http','$q', function ($http, $q) {
        var ready = false;
        var registerdListeners = [];

        var callListeners = function(){
            for(var i = registerdListeners.length - 1; i >= 0; i--){
                registerdListeners[i]();
            }
        }

        return{
            isReady: function(){
                return ready;
            },

            makeReady: function(){
                ready = true;
                callListeners();

            },

            registerListner: function(callback){
                if(ready){
                    callback();
                } else {
                    registerdListeners.push(callback);
                }
            }
        }

    }]);


