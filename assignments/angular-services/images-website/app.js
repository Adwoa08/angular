var app = angular.module("myImageApp", []);


app.controller("mainController", ["$scope", "imageService", function($scope, imageService){
    
   $scope.imageObject = imageService.imageObj;
    
    $scope.submit = function(newCartoon){
        $scope.imageObject = imageService.addCartoon(newCartoon);
        $scope.image = {};
    }
    
    
}])