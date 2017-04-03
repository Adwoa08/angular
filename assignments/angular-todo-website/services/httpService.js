var app = angular.module("myToDo");

app.service("httpService", ["$http", function ($http) {

    var responseData = [];

    var self = this;


    //    Getting data
    this.getOldTodo = function () {
        return $http.get("http://api.vschool.io/terry/todo")
            .then(function (response) {
                return responseData = response.data;

            })
    }



    //    Adding new info from my form
    this.addTo = function (input) {

        return $http.post("http://api.vschool.io/terry/todo", input)
            .then(function (response) {
                responseData.push(response.data);
                return responseData;

            })

    }


    //    Deleting old info

    this.deleteItem = function (index) {

        return $http.delete("http://api.vschool.io/terry/todo/" + responseData[index]._id).then(function () {
            responseData.splice(index, 1);
            return responseData;
        })
    }






    this.editItem = function (item) {
       return $http.put("http://api.vschool.io/terry/todo/" + item._id, item);
    }

    
    
    
    
    //    //we need the id for the url and i1ndex for the item to be deleted.
      
}])
