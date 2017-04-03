var app = angular.module("myToDo", []);

app.controller("mainController", ["$scope", "httpService", function ($scope, httpService) {
    

//OLD TODO ITEMS
    httpService.getOldTodo().then(function(response){
        $scope.posts = response;
    })
    
 
    $scope.addTo = function(newPost){
        httpService.addTo(newPost).then(function(response){
            $scope.posts = response;

        })
    }
    
    
    $scope.deleteMe = function(index){
        httpService.deleteItem(index).then(function(response){
            $scope.posts = response;
        })
    }
    

 
    $scope.edit = function(item, i){
        httpService.editItem(item).then(function(){
          $scope.posts[i] = item;  
        })
    }
    
//    
//    
//    
    
    
}])
