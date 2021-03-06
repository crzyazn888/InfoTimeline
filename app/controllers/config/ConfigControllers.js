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
    .controller('ConfigViewController', ['$scope', function($scope) {

    }])
    .controller('ConfigConfigController', ['$scope', '$http', '$window', function($scope, $http, $window) {
        function init() {
            $scope.data = {
                menuLinks: []
            };
            $http({
                method: 'GET',
                url: '/app/backend/config/config.php?load=1'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.data = response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        }

        init();

        $scope.sortableOptions = {
            axis: 'y'
        };

        /**
        * Add menu links
        *
        * @method addMenuLink
        **/
        $scope.addMenuLink = function() {
            $scope.data.menuLinks.push({});
        };
        /**
        * Delete menu links
        *
        * @method deleteMenuLink
        **/
        $scope.deleteMenuLink = function(linkIndex) {
            $scope.data.menuLinks.splice(linkIndex, 1);
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
                url: '/app/backend/config/config.php',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}
            }).then(function successCallback(response) {
                console.log(response);
                $window.open('/app/backend/config/config.php?download=1', '_blank');
            }, function errorCallback(response) {
                console.log(response);
            });
        };
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
            $scope.savedJson = "";
        }

        init();

        $scope.sortableOptions = {
            axis: 'y'
        };

        /**
        * Load Saved Topic json
        *
        * @method loadJson
        **/
        $scope.loadJson = function() {
            $scope.data = JSON.parse($scope.savedJson);
            $scope.savedJson = "";
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
