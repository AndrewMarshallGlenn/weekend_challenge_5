var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/pets', {
            templateUrl: '/views/templates/pets.html',
            controller: 'PetController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: 'pets'
        });
}]);
