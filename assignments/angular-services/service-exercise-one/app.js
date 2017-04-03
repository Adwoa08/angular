var app = angular.module("myPokemonApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    
    .when("/home", {
        templateUrl: "/home/home.html",
        controller: "homeController"
    })
    
    .when("/about", {
        templateUrl: "/about/about.html",
        controller: "aboutController"
    })
    
    .when("/contact", {
        templateUrl: "/contact/contact.html",
        controller: "contactController"
    })
    
    .otherwise ({
        redirectTo: "/home"
    })
    
}])