angular.module('InfoTimeline.Services', [])
    .service('configService', function($http) {
        //General Config
        this.loadConfig = function () {
            return $http({
                method: 'GET',
                url: '/app/backend/loadConfig.php'
            }).then(function(response) {
                //console.log(response);
                return response.data;
            }, function(httpError) {
                //console.log(response);
                throw httpError;
            });
        };

        //Activity Config
        this.loadActivity = function(activityFolder) {
            return $http({
                method: 'GET',
                url: '/app/backend/loadActivity.php?folder='+activityFolder
            }).then(function(response) {
                return response.data;
            }, function(httpError) {
                throw httpError;
            });
        }
    });
