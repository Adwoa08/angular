var app = angular.module("myApp");

app.service("redService", [function(){
    
    this.redScore = 100;
    
    var self = this;
    
    this.redAdd = function(){
        self.redScore++;
        return self.redScore;
    }
    
    this.redSub = function(){
        self.redScore--;
         return self.redScore;
    }
    
    this.redReset = function(){
        if(self.redScore === 0){
            self.redScore = 100;
        }
        
        return self.redScore;
    }

    
}])