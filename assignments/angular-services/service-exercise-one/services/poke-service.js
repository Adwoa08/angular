var app = angular.module("myPokemonApp");

app.service("pokeService", function(){
    
    
   this.oldFavPokemon = [];
    var self = this;
    var number = 100;
    var number2 = 100;
    
    this.addPokemon = function(info){
        self.oldFavPokemon.push(info);
        return self.oldFavPokemon; 
    }
    
    
    
    this.numberAdded = function(){
        number += 1;
        return number;
    }
    
    
    this.numberDecrease = function(){
        number2 -= 1;
        return number2;
    }
})