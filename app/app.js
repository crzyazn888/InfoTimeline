//InfoTimeline Main App
angular.module('InfoTimeline', [
    'ngMaterial',
    'ngRoute'
]);

//InfoTimeline Config App
angular.module('InfoTimelineConfig', [
    'ngMaterial',
    'ngRoute',
    'ui.sortable'
])
.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
    //Define Material Design theme
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('green');

    //Define Routes
    $routeProvider
        .when('/', {
            templateUrl: '/views/config/index.html',
            controller: 'ConfigHomeController'
        })
        .when('/config', {
            templateUrl: '/views/config/config.html',
            controller: 'ConfigConfigController'
        })
        .when('/activity', {
            templateUrl: '/views/config/activity.html',
            controller: 'ConfigActivityController'
        });
});
