var app = angular.module("myTemperature");

app.service("httpServiceCall", ["$http", function ($http) {

    var self = this;

    self.temperature = ["°C", "°F", "°K"];



    this.getTem = function (temp) {

        return $http.jsonp("https://api.darksky.net/forecast/29c550d05387f56384e3a8417e70f45e/" + temp + '?callback=JSON_CALLBACK')
            .then(function (response) {
                var tempInfo = response.data;
                return tempInfo;
            
            })

    }

}])
