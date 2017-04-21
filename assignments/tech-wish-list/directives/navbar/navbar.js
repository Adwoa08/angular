var app = angular.module("myTechApp");

app.directive("navbar", function() {
    return {
        restrict: "E",
        templateUrl: "directives/navbar/navbar.html"
    }
});