angular.module('InfoTimeline')
    .controller('ActivityOrientationController', ['$scope', '$routeParams', 'configService', 'dbService', function($scope, $routeParams, configService, dbService) {
        function init() {
            $scope.routeParams = $routeParams;
            configService.loadActivity($scope.routeParams.activityFolder).then(function(response) {
                $scope.activity = response;
            });
            dbService.createId().then(function(response) {
                $scope.id = response;
            });
        }

        init();
    }])
    .controller('ActivityStep1Controller', ['$scope', '$routeParams', 'configService', 'dbService', 'activityService', '$mdDialog', '$location', function($scope, $routeParams, configService, dbService, activityService, $mdDialog, $location) {
        function init() {
            $scope.routeParams = $routeParams;
            configService.loadActivity($scope.routeParams.activityFolder).then(function(response) {
                $scope.activity = response;
                $scope.sources = response.sources;
                activityService.shuffleArray($scope.sources);
            });
            dbService.saveState($scope.routeParams.id, 1, $scope.routeParams.activityFolder);
            $scope.helpToggle();
        }

        /**
        * Open Instructions Dialog
        *
        * @method helpToggle
        **/
        $scope.helpToggle = function(ev) {
            $mdDialog.show({
                locals:{config: $scope.config},
                controller: InstructionsDialogController,
                templateUrl: '/views/step1/instructions.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            });
        };

        //Instructions Dialog controller
        function InstructionsDialogController($scope, $mdDialog, config) {
            $scope.config = config;
            $scope.hide = function() {
                $mdDialog.hide();
            };
        }

        init();

        $scope.actionsState = true;
        $scope.activitySortableOptions = {
            handle: '> div > .source-drag-handle',
            axis: 'y'
        }

        /**
        * Save data to database and advance state
        *
        * @method saveData
        **/
        $scope.saveData = function() {
            dbService.saveData($scope.routeParams.id, $scope.routeParams.activityFolder, $scope.sources).then(function(response) {
                var url = "/activity/"+$scope.routeParams.activityFolder+"/2/"+$scope.routeParams.id;
                $location.path(url);
            });
        };

        /**
        * Display Hint Dialog
        *
        * @method showHint
        **/
        $scope.showHint = function(sourceIndex, ev) {
            $mdDialog.show({
                locals:{source: $scope.sources[sourceIndex]},
                controller: HintDialogController,
                templateUrl: '/views/step1/hint.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            });
        };

        //Hint Dialog controller
        function HintDialogController($scope, $mdDialog, source) {
            $scope.source = source;
            $scope.hide = function() {
                $mdDialog.hide();
            };
        }
    }])
    .controller('ActivityStep2Controller', ['$scope', '$routeParams', 'configService', 'dbService', 'activityService', '$mdDialog', '$location', function($scope, $routeParams, configService, dbService, activityService, $mdDialog, $location) {
        function init() {
            $scope.routeParams = $routeParams;
            configService.loadActivity($scope.routeParams.activityFolder).then(function(response) {
                $scope.activity = response;
            });
            dbService.saveState($scope.routeParams.id, 2, $scope.routeParams.activityFolder);
            dbService.loadData($scope.routeParams.id, 1).then(function(response) {
                $scope.sources = response;
            });
            $scope.helpToggle();
        }

        /**
        * Open Instructions Dialog
        *
        * @method helpToggle
        **/
        $scope.helpToggle = function(ev) {
            $mdDialog.show({
                locals:{config: $scope.config},
                controller: InstructionsDialogController,
                templateUrl: '/views/step2/instructions.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            });
        };

        //Instructions Dialog controller
        function InstructionsDialogController($scope, $mdDialog, config) {
            $scope.config = config;
            $scope.hide = function() {
                $mdDialog.hide();
            };
        }

        init();

        $scope.actionsState = true;

        /**
        * Save data to database and advance state
        *
        * @method saveData
        **/
        $scope.saveData = function() {
            var url = "/activity/"+$scope.routeParams.activityFolder+"/3/"+$scope.routeParams.id;
            $location.path(url);
        };

        /**
        * Display Hint Dialog
        *
        * @method showHint
        **/
        $scope.showRationale = function(sourceIndex, ev) {
            $mdDialog.show({
                locals:{source: $scope.sources[sourceIndex]},
                controller: RationaleDialogController,
                templateUrl: '/views/step2/rationale.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            });
        };

        //Hint Dialog controller
        function RationaleDialogController($scope, $mdDialog, source) {
            $scope.source = source;
            $scope.hide = function() {
                $mdDialog.hide();
            };
        }
    }]);
