angular.module('InfoTimeline')
    .controller('ActivityOrientationController', ['$scope', '$routeParams', 'configService', function($scope, $routeParams, configService) {
        function init() {
            $scope.routeParams = $routeParams;
            configService.loadActivity($scope.routeParams.activityFolder).then(function(response) {
                $scope.activity = response;
            });
        }

        init();
        
    }]);
