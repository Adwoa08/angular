var app = angular.module("myTechApp", ["ngRoute"]);


app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    
    .when("/home", {
        templateUrl: "home/home.html",
        controller: "homeCtrl"
    })
    .when("/computer", {
        templateUrl: "computers/computer.html",
        controller: "computerCtrl"
    })
    .otherwise({
        redirectTo: "/home"
    })
    
    
    
}])