var app = angular.module("myYodaSpeak", []);

app.controller("mainController", ["$scope", "myHttpService", function($scope, myHttpService){
    
    
   $scope.getYodaSpeak = function(){     myHttpService.getYodaSpeak($scope.sentence).then(function(data){
           $scope.yodaSentence = data;
       });
   }     
}])