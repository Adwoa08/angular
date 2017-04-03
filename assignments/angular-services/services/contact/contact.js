var app = angular.module("routing-practice");

app.controller("ContactController", ["$scope", "nameService", function($scope, nameService){
	
	$scope.test = "This is the contact page";
	
	$scope.name = nameService.userName;
	
	$scope.submit = function(name){
		nameService.userName = name;
		$scope.name = name;
        nameService.alert();
	}
	
}])

