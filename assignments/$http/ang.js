//.then returns a promise, the .then makes us get our data back.


var app = angular.module("myHttp", []);

app.controller("mainController", ["$scope", "$http", function($scope, $http){
    
    
    var req = {
        method: "GET",
        url: "http://pokeapi.co/api/v1/pokedex/",
        header: "WILL BE GIVEN"//you willbe given the header in and password to access the api
    }
    $http(req).then(function (response){
        $scope.pokemon = response.data.objects[0].pokemon;
        
    });
    
    
    
    
    
    
//postings
    
    var todos = {
        title: "Buy Fish",
        description: "Not Salmon",
        completed: false
    }
    
    
    $http.post('http://api.vschool.io/terry/todo/', todos)
        .then(function(response){
        console.log(response.data);
    })
    
}]);