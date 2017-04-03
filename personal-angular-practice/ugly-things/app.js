var app = angular.module("myUglyThings", []);

app.controller("mainController", ["$scope", function($scope){
    
    $scope.uglyStuff = [];
    
    $scope.myFunction = function(newThing){
        $scope.uglyStuff.push(newThing);
        $scope.ugly = {};
    }
    
    
    
    $scope.myDelete = function(i){
        $scope.uglyStuff.splice(i, 1);
    }
    
    
}])