var app = angular.module("nameBadge", []);

app.controller("mainController", ["$scope", function($scope){
    
    $scope.badgeInfo = function(){
        
       $scope.name= $scope.userFirstName + " " + $scope.userLastName;
        
        $scope.email = $scope.userEmail;
        
        $scope.birthPlace = $scope.userBirthPlace;
        
        $scope.phone = $scope.userPhone;
        
        $scope.food = $scope.userFood;
        
        $scope.description = $scope.userDescription;
    
    } 
    
}])