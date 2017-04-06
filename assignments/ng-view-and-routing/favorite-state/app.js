var app = angular.module("myViewApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider

        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeController"
        })

        .when("/about", {
            templateUrl: "about/about.html",
            controller: "aboutController"
        })

        .when("/whyilove", {
            templateUrl: "whyilove/whyilove.html",
            controller: "whyiloveController"
        })

        .otherwise({
            redirectTo: "/home"
        });


}]);

app.directive("mikeTheMink", function(){
    return {
        
        template: "<img ng-hide='mink' ng-mouseover='mink=true' src='http://coursework.vschool.io/content/images/2015/06/download.jpg'>"
    }
})
