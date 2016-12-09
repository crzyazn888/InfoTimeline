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
        .when('/load/:id', {
            templateUrl: '/views/index/load.html',
            controller: 'MainLoadController'
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
        })
        .when('/activity/:activityFolder/1/:id', {
            templateUrl: '/views/step1/step1.html',
            controller: 'ActivityStep1Controller'
        })
        .when('/activity/:activityFolder/2/:id', {
            templateUrl: '/views/step2/step2.html',
            controller: 'ActivityStep2Controller'
        })
        .when('/activity/:activityFolder/3/:id', {
            templateUrl: '/views/step3/step3.html',
            controller: 'ActivityStep3Controller'
        })
        .when('/activity/:activityFolder/4/:id', {
            templateUrl: '/views/step4/step4.html',
            controller: 'ActivityStep4Controller'
        })
        .when('/activity/:activityFolder/complete', {
            templateUrl: '/views/orientation/complete.html',
            controller: 'ActivityCompleteController'
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
