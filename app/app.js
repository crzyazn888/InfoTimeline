//InfoTimeline Main App
angular.module('InfoTimeline', [
    'ngMaterial',
    'ngRoute',
    'ui.sortable',
    'InfoTimeline.Services'
])
.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
    //Define Material Design theme
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('amber');
    $mdThemingProvider.theme('dark-green')
        .backgroundPalette('green').dark();

    //Define Routes
    $routeProvider
        .when('/', {
            templateUrl: '/views/index/index.html',
            controller: 'MainIndexController'
        })
        .when('/report', {
            templateUrl: '/views/index/report.html',
            controller: 'MainReportController'
        })
        .when('/instructors', {
            templateUrl: '/views/index/instructors.html',
            controller: 'MainInstructorsController'
        })
        .when('/activity/:activityFolder', {
            templateUrl: '/views/orientation/index.html',
            controller: 'ActivityOrientationController'
        });
});

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
