angular.module('InfoTimeline')
    .controller('MainController', ['$scope', '$mdSidenav', 'configService', function($scope, $mdSidenav, configService) {
        function init() {
            configService.loadConfig().then(function(response){
                $scope.config = response;
            });
        }

        init();

        /**
        * Toggle Menu
        *
        * @method toggleMenu
        **/
        $scope.toggleMenu = function() {
            $mdSidenav("InfoTimelineMenu").toggle();
        };
    }])
    .controller('MainIndexController', ['$scope', function($scope) {

    }])
    .controller('MainReportController', ['$scope', function($scope) {

    }])
    .controller('MainInstructorsController', ['$scope', function($scope) {

    }])
    .controller('MainLoadController', ['$scope', '$routeParams', 'dbService', '$location', function($scope, $routeParams, dbService, $location) {
        function init() {
            $scope.routeParams = $routeParams;
            dbService.loadState($scope.routeParams.id).then(function(response) {
                var url = "/activity/"+response.activity+"/"+response.step+"/"+$scope.routeParams.id;
                $location.path(url);
            });
        }

        init();
    }]);
