//var app = angular.module("myFirstApp", []);
//
//app.controller("mainController", ["$scope", function($scope){
//    
//    $scope.name = function() {
//        return $scope.hisName;
//    }
//    
//}]);
//


var app = angular.module("hisApp", []);

app.controller("mainController", ["$scope", function($scope){
    
    $scope.getIt = function(){
        return $scope.kwame;
    }
    
    
}])