var app = angular.module("myImageApp");

app.service("imageService", [function(){
    
    this.imageObj = [];
    
    var self = this;
    
    this.addCartoon = function(cartoon){
        self.imageObj.push(cartoon);
        return self.imageObj;
    }
    
}])