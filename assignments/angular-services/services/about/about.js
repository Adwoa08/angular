var app = angular.module("routing-practice")

app.controller("AboutController", ["$scope", "nameService", function($scope, nameService){
	
	$scope.name = nameService.userName;
	
	$scope.test = "this is the about page!!"
}])