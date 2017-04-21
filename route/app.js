var app = angular.module("routing-practice", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    
    .when("/about", {
            templateUrl: "about/about.html",
            controller: "aboutController"
        })
    
    .when("/contact", {
        templateUrl: "contact/contact.html",
        controller: "contactController"
    })
    
}])