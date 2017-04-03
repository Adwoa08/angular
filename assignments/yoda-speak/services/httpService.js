var app = angular.module("myYodaSpeak");

app.service("myHttpService", ["$http", function($http){
   
//    this.yodaSentence = "";
    
    var req = {
        method: "GET",
        headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    }
    
    this.getYodaSpeak = function(sentence){
        
        
        req.url = "https://yoda.p.mashape.com/yoda?sentence=" + sentence
        
        return $http(req).then(function(response){
           var yodaSentence = response.data;
           return yodaSentence;
        }, function(error){
            console.log(error);
        })
        
    }
    
}])