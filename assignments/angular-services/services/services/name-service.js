var app = angular.module("routing-practice");
	
app.service("nameService", function(){
	
	this.userName = '';
    
    this.alert = function(){
        alert("hello")
    }
	
})