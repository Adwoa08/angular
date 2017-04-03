var app = angular.module("practice", []);

app.controller("mainController", ["$scope", function($scope){
    
    
    $scope.people = [];
    
    
    
//    $scope.test = "this is a test";
    
    $scope.submit = function(info){
        
        $scope.people.push(info);
        $scope.newPerson = {};
        console.log($scope.people);
    }
}])