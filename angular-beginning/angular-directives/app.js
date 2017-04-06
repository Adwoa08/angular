// app.js
angular.module('myApp', [])

.directive("clickColor", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            console.log(attrs);
            elem.on("click", function() {
                elem.css("color", attrs.clickColor);
            });
        }
    }
})

.directive('myInfo', function () {
    return {
        templateUrl: 'info.html',
        scope: {
            contacts: "="
        },
    };
})

.controller('myController', function ($scope) {

    $scope.people = [
        {
            name: "Sally",
            email: "sally@smith.com",
            phone: "801-801-8018"
        },
        {
            name: "Jill",
            email: "jill@smith.com"
        },
        {
            name: "Sally",
            email: "sally@smith.com"
        },
        {
            name: "Sally",
            email: "sally@smith.com"
        },
        {
            name: "Sally",
            email: "sally@smith.com"
        },
        
    ]

    $scope.friend = {
        name: "Sally",
        email: "sally@smith.com"
    }

    //    $scope.warren = {
    //        name: 'Warren Buffett',
    //        email: 'warren.buffett@gmail.com'
    //    };
    //    $scope.dieter = {
    //        name: 'Dieter Rams',
    //        email: 'dieter.rams@vitsoe.com'
    //    };
})

.controller('SecondController', function ($scope) {

    $scope.associate = {
        name: "Jill",
        email: "jillthepill@gmail.com",
        phone: "801-801-8018"
    }

    //    $scope.warren = {
    //        name: 'Warren Buffett',
    //        email: 'warren.buffett@gmail.com'
    //    };
    //    $scope.dieter = {
    //        name: 'Dieter Rams',
    //        email: 'dieter.rams@vitsoe.com'
    //    };
})