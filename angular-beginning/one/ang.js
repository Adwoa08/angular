var app = angular.module('learningAngular',[]);

app.controller('mainCtrl', function($scope, dataService) {  
    $scope.person = {
        firstName: "John",
        lastName: "Smith"
    };

    $scope.getFullName = function() {
        return $scope.person.firstName + ' ' + $scope.person.lastName;
    }

    $scope.title = "TEST"

    dataService.personLoggedIn = $scope.person;
});

