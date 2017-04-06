var app = angular.module("personalSite");

app.controller("homeCtrl", ["$scope", "httpServiceCall", function($scope, httpServiceCall){
    
    $scope.info = function(country){
        httpServiceCall.getQuotes(country).then(function(quotes){
             $scope.display = 0;
            for(var i = 0; i < quotes.Quotes.length; i++){
                $scope.display += quotes.Quotes[i].MinPrice;
            }
            $scope.display /= quotes.Quotes.length;
        });
        
    }
    
    
    
}])