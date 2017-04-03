var app = angular.module("myHitList");

app.service("httpCall", ["$http", function ($http) {
    var self = this;
    

    this.hitListData = function () {
        
        return $http.get("http://api.vschool.io:6543/hitlist.json")
        .then(function (response) {
            return  self.hitListService = response.data;
            })

    }

}])
