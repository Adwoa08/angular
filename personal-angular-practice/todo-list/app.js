var app = angular.module("myToDo", []);

app.controller("mainController", ["$scope", "$http", function ($scope, $http) {

    $scope.oldItems = [];



    //GETTING DATA
    $http.get("http://api.vschool.io/terry/todo")
        .then(function (response) {
            $scope.oldItems = response.data;
        })


    //ADDING DATA    

    $scope.addNewItem = function (newItem) {

        $http.post("http://api.vschool.io/terry/todo", newItem)
            .then(function (response) {
                $scope.oldItems.push(response.data);
            })
        

    }






    //    DELETING DATA/ITEM

    //    $scope.deleteOldItem = function(oldItem){
    //        
    //        $http.delete("http://api.vschool.io/terry/todo/" + $scope.oldItems[oldItem]._id)
    //        .then(function(){
    //            $scope.oldItems.splice(oldItem, 1);
    //        })
    //        
    //    }

    $scope.deleteOldItem = function (oldItem, id) {

        $http.delete("http://api.vschool.io/terry/todo/" + id);
            
                $scope.oldItems.splice(oldItem, 1);

    }



    //    EDITING DATA/ITEM
    $scope.save = function (oldItem) {

        $http.put("http://api.vschool.io/terry/todo/" + oldItem._id, oldItem);

    }




}])
