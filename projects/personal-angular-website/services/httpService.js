var app = angular.module("personalSite");

app.service("httpServiceCall", ["$http", function ($http) {


    var self = this;

    
    function normalizeLocation(location){
        if (location === "america" || location === "America"){
            return "us"
        } else if(location === "Britain" || location === "britain"){
            return "uk"
        }
    }
    
    this.getQuotes = function (country) {
        var departure = country.departure;
        var destination = country.destination;
        
        
        
        departure = normalizeLocation(departure);
        destination = normalizeLocation(destination);
        
        
        
        
        var key = "vs428264159776212343779819234691";
        return $http.get("http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/" + departure + "/" + destination + "/anytime/anytime?apikey=" + key)
            .then(function (response) {
                self.quotes = response.data;
//                console.log(self.quotes.Quotes[0].MinPrice);
                console.log(self.quotes);
                return self.quotes;
            })

    }

//FR eur

}])
