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
    })
    .service('dbService', function($http) {
        //Create an ID
        this.createId = function () {
            return $http({
                method: 'GET',
                url: '/app/backend/generateId.php'
            }).then(function(response) {
                //console.log(response);
                return response.data;
            }, function(httpError) {
                //console.log(response);
                throw httpError;
            });
        };

        //Save the State
        this.saveState = function (id, step, activity) {
            var saveData = {
                "id": id,
                "step": step,
                "activity": activity
            };
            return $http({
                method: 'POST',
                url: '/app/backend/saveState.php',
                data: saveData,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                //console.log(response);
                //return response.data;
            }, function(httpError) {
                //console.log(response);
                //throw httpError;
            });
        };

        //Save the Data
        this.saveData = function (id, activity, sources) {
            var saveData = {
                "id": id,
                "activity": activity,
                "sources": sources
            };
            return $http({
                method: 'POST',
                url: '/app/backend/saveData.php',
                data: saveData,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                //console.log(response);
                //return response.data;
            }, function(httpError) {
                //console.log(response);
                //throw httpError;
            });
        };

        //Load Data
        this.loadData = function (id, compare=0) {
            return $http({
                method: 'GET',
                url: '/app/backend/loadData.php?id='+id+'&compare='+compare
            }).then(function(response) {
                console.log(response);
                return response.data;
            }, function(httpError) {
                //console.log(response);
                throw httpError;
            });
        };
    })
    .service('activityService', function() {
        //Shuffle an Array
        this.shuffleArray = function(array) {
            var m = array.length, t, i;
            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }
    });
