angular.module('InfoTimelineConfig')
    .controller('ConfigMainController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        /**
        * Toggle Menu
        *
        * @method toggleMenu
        **/
        $scope.toggleMenu = function() {
            $mdSidenav("configMenu").toggle();
        };
    }])
    .controller('ConfigHomeController', ['$scope', function($scope) {

    }])
    .controller('ConfigConfigController', ['$scope', function($scope) {

    }])
    .controller('ConfigActivityController', ['$scope', '$http', '$window', function($scope, $http, $window) {
        function init() {
            $scope.data = {
                sources: [],
                correctOrder: [],
                exampleOrder1: [],
                exampleOrder2: [],
                exampleOrder3: []
            };
        }

        init();

        $scope.sortableOptions = {
            axis: 'y'
        };

        /**
        * Add sources
        *
        * @method addSource
        **/
        $scope.addSource = function() {
            $scope.data.sources.push({});
        };
        /**
        * Delete sources
        *
        * @method deleteSource
        **/
        $scope.deleteSource = function(sourceIndex) {
            $scope.data.sources.splice(sourceIndex, 1);
        };

        /**
        * Add Correct Order sources
        *
        * @method addCorrectOrderSource
        **/
        $scope.addCorrectOrderSource = function() {
            $scope.data.correctOrder.push({});
        };
        /**
        * Delete Correct Order sources
        *
        * @method deleteCorrectOrderSource
        **/
        $scope.deleteCorrectOrderSource = function(sourceIndex) {
            $scope.data.correctOrder.splice(sourceIndex, 1);
        };

        /**
        * Add Example Order 1 sources
        *
        * @method addExampleOrder1Source
        **/
        $scope.addExampleOrder1Source = function() {
            $scope.data.exampleOrder1.push({});
        };
        /**
        * Delete Example Order 1 sources
        *
        * @method deleteExampleOrder1Source
        **/
        $scope.deleteExampleOrder1Source = function(sourceIndex) {
            $scope.data.exampleOrder1.splice(sourceIndex, 1);
        };

        /**
        * Add Example Order 2 sources
        *
        * @method addExampleOrder2Source
        **/
        $scope.addExampleOrder2Source = function() {
            $scope.data.exampleOrder2.push({});
        };
        /**
        * Delete Example Order 2 sources
        *
        * @method deleteExampleOrder2Source
        **/
        $scope.deleteExampleOrder2Source = function(sourceIndex) {
            $scope.data.exampleOrder2.splice(sourceIndex, 1);
        };

        /**
        * Add Example Order 3 sources
        *
        * @method addExampleOrder3Source
        **/
        $scope.addExampleOrder3Source = function() {
            $scope.data.exampleOrder3.push({});
        };
        /**
        * Delete Example Order 3 sources
        *
        * @method deleteExampleOrder3Source
        **/
        $scope.deleteExampleOrder3Source = function(sourceIndex) {
            $scope.data.exampleOrder3.splice(sourceIndex, 1);
        };

        /**
        * Save data to JSON and Return for Download
        *
        * @method saveFile
        **/
        $scope.saveFile = function() {
            console.log($scope.data);
            $http({
                method: 'POST',
                url: '/app/backend/config/activity.php',
                data: $scope.data,
    headers: {'Content-Type': 'application/json'}
            }).then(function successCallback(response) {
                console.log(response);
                $window.open('/app/backend/config/activity.php?download=1', '_blank');
            }, function errorCallback(response) {
                console.log(response);
            });
        };
    }]);
