var app = angular.module("myTemperature", []);

app.controller("mainController", ["$scope", "httpServiceCall", function ($scope, httpServiceCall) {


    $scope.temps = [10, 15, 20, 25, 30];

    $scope.tempNames = httpServiceCall.temperature;


    $scope.convert = function () {
        var temp = parseInt($scope.lat) + "," + parseInt("-" + $scope.lon);
        httpServiceCall.getTem(temp).then(function (response) {
            $scope.display = response;

        })

    }

}])


app.filter("tempMeasurement", function () {


    return function (temp, degreeType) {
        if (degreeType === undefined) {
            return temp;
        }
        if (degreeType === '°C') {
            return ((temp - 32) * 5 / 9).toFixed(2) + '°C';
        } else if (degreeType === "°K") {
            return ((temp + 459.67) * 5 / 9).toFixed(2) + "°K";
        } else {
            return temp.toFixed(2) + "°F";
        }
    }
})
