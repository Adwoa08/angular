var app = angular.module("myTechApp");

app.directive("compList", function(){
    
    return {
        templateUrl: "directives/computer-tech/comp-directive.html",  
        scope: {
            "techno": "=",
            "horizontal": "="
        },
        
        restrict: "E"
    }
    
})