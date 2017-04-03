//in the service 
this.getLuke = function(){
    var luke = {};
    return $http.get("http://swapi.co/api/people/1/")
    .then(function(response){
        luke.name = response.data.name;
        luke.eyeColor = response.data.eye_color;
        return $http.get(response.data.homeworld);
    })
    .then(function(response){
        luke.homeworld = response.data.name;
        return luke;
    })
}



//in my controller
pokeService.getLuke().then(function(luke){
    $scope.luke = luke;
})



//on my html page
<h1>luke.name</h1>
<h2>luke.eyeColor</h2>
<h3>luke.homeworld</h3>