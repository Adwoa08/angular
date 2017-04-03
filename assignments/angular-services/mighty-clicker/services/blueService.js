var app = angular.module("myApp");

app.service("blueService", [function(){
    
    this.blueScore = 100;
    
    var self = this;
    
    this.blueAdd = function(){
        self.blueScore++;
        return self.blueScore;
    }
    
    this.blueSub = function(){
        self.blueScore--;
        return self.blueScore;
    }
    
    this.blueReset = function(){
        if(self.blueScore === 0){
            self.blueScore = 100;
        }
        return self.blueScore;
    }

    
}])