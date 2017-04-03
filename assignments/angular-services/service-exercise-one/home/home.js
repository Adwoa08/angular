var app = angular.module("myPokemonApp");

app.controller("homeController", ["$scope", "pokeService", function($scope, pokeService){
    
    $scope.favPokemon = pokeService.oldFavPokemon;
                                  
    $scope.addPoke = function(newPoke){
        $scope.favPokemon = pokeService.addPokemon(newPoke);
        $scope.poke = '';
    }                           
    
    
    $scope.deleteItem = function(index){
        $scope.favPokemon.splice(index, 1);
    }
    
    
}])