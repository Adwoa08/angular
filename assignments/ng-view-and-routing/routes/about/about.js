var app = angular.module("myViewApp");

app.controller("aboutController", ["$scope", function($scope){
    
    $scope.test = "I am just testing my about controller";
    
}])