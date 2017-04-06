var app = angular.module("myTechApp");

app.controller("homeCtrl", ["$scope", function($scope){
    
//    $scope.fastcar = 'https://s-media-cache-ak0.pinimg.com/originals/7a/26/23/7a26238e063473d4f1b88d34361e92c2.jpg';
    
    
    $scope.otherTech = [
        {
            itemName: "Samsung Galaxy 8",
            itemImage: "http://images.techtimes.com/data/images/full/289160/galaxy-s7-edge.png",
            itemPrice: 800
        }, 
        {
            itemName: "Mac Air 2016",
            itemImage: "http://images.en.yibada.com/data/thumbs/full/47906/685/0/0/0/image.jpg",
            itemPrice: 1200
        }, 
        {
            itemName: "Venom",
            itemImage: "http://www.mln.com.au/img/files/5554/blackbookx-image2.jpg",
            itemPrice: 6799
        }
    ] 
    
}])


//app.directive("fastCar", function(){
//    
//    return {
//        retrict: "EA", 
//        
//        template: "<img href='https://s-media-cache-ak0.pinimg.com/originals/7a/26/23/7a26238e063473d4f1b88d34361e92c2.jpg'>"
//    }
//})


app.directive("homeTech", function(){
    
    return {
        scope: {
            "homeTechno": "="
        },
        
        templateUrl: "directives/home-tpl/home-tpl.html"
    }
    
})