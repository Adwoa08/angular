var app = angular.module("myHitList", []);

app.controller("mainController", ["$scope", "httpCall", function($scope, httpCall){
 
    
    httpCall.hitListData().then(function(info){
        $scope.hitList = info;
    })
    
    
}]);