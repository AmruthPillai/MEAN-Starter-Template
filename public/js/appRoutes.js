angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/posts', {
            templateUrl: 'views/post.html',
            controller: 'PostController'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);