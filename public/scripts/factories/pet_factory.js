myApp.factory('PetFactory', ['$http', function($http) {

    var animals = undefined;

    var getAnimalData = function() {
        var promise = $http.get('/data').then(function(response) {
            animals = response.data;
            return animals;
        });

        return promise;
    };

    function favoriteAnimals(animals) {
        $http({
            method: 'POST',
            url: '/data',
            data: {
                id: animals.animalId,
                name: animals.animalName,
                description: animals.animalDesc,
                image: animals.animalImage
            }
        }).then(function(response) {
            console.log(response.data);
        });
        return favoriteAnimals;
    }

    var animalFac = {
        favorites: function() {
            return animals;
        },
        getAnimals: function() {
            return getAnimalData();
        },
        postFavorites: function(animals) {
            favoriteAnimals(animals);
            return favoriteAnimals;
        }
    };

    return animalFac;

}]);

