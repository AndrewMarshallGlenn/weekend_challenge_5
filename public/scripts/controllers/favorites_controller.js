myApp.controller('FavoritesController', ['$scope', 'PetFactory', function($scope, PetFactory) {
    $scope.data = {};
    $scope.petFactory = PetFactory;

    $scope.favoriteAnimals = [];

    if($scope.petFactory.favorites() === undefined) {
        $scope.petFactory.getAnimals().then(function() {
            $scope.favoriteAnimals = $scope.petFactory.favorites();
        });
    } else {
        $scope.favoriteAnimals = $scope.petFactory.getAnimals();
    }

}]);