var app = angular.module("myTechApp");

app.controller("computerCtrl", ["$scope", function($scope){
    
    
    $scope.compPhones = [
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