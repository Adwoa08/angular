var app = angular.module("myPokemonApp");

app.controller("aboutController", ["$scope", "pokeService", function($scope, pokeService){
    
    $scope.number = 100;
    $scope.number2 = 100;
    
    $scope.blue = function(){
        
    $scope.number = pokeService.numberAdded();
    $scope.number2 = pokeService.numberDecrease();
        
    }
    
    $scope.red = function(){
        $scope.number2 = pokeService.numberAdded();
        $scope.number = pokeService.numberDecrease();
        
    }
}])