var app = angular.module("nameBadge", []);

app.controller("mainController", ["$scope", function ($scope) {
    
    $scope.people =[];

    $scope.formSubmit = function (info) {
        $scope.people.push(info);
        $scope.user = {};
    }


}])
