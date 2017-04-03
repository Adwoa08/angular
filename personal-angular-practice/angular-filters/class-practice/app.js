app.filter("capitalize", function(){
    return function(input){
        var newString = "";
        newString += input[0].toUpperCase();
        
        for (var i = 1; i < input.length; i++){
            
            if (input[i] === " "){
                
                newString += " " + input[i+1].toUpperCase();
                i++;
            } else {
                newString += input[i]
                console.log(input[i]);
            }
            
        }
        
        return newString;
    }
})