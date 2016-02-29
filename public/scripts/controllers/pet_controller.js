myApp.controller('PetController', ['$scope', '$http', 'PetFactory', function($scope, $http, PetFactory) {
    $scope.data = {};
    $scope.petFactory = PetFactory;
    $scope.showAnimal = false;
    $scope.animals = [
        {type: 'barnyard'},
        {type: 'bird'},
        {type: 'cat'},
        {type: 'dog'},
        {type: 'horse'},
        {type: 'pig'},
        {type: 'reptile'},
        {type: 'smallfurry'}
    ];


    $scope.myAnimal = $scope.animals[0];
    var animalType = $scope.myAnimal;
    console.log($scope.myAnimal);
    console.log(animalType);

    $scope.chooseAnimal = function() {
        animalType = $scope.myAnimal;
        petFinder(animalType.type);
    };

    $scope.addFavorite = function(id, name, description, image) {
        var animals = {
            animalId: id,
            animalName: name,
            animalDesc: description,
            animalImage: image
        };
        $scope.petFactory.postFavorites(animals);
        return animals;
    };

    function petFinder(animalType) {
        // API key
        var key = '3c4ece3d5c68d2044f06cf07caf92ee7';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + animalType;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
        $scope.showAnimal = true;
    }

    petFinder(animalType.type);
}]);