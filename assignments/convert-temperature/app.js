var app = angular.module("myTemperature", []);

app.controller("mainController", ["$scope", "httpServiceCall", function ($scope, httpServiceCall) {


    $scope.temps = [10, 15, 20, 25, 30];

    $scope.tempNames = httpServiceCall.temperature;


    $scope.convert = function () {
        var temp = parseInt($scope.lat) + "," + parseInt("-" + $scope.lon);
        httpServiceCall.getTem(temp).then(function (response) {
            $scope.display = response;

        })
        $scope.lat = "";
        $scope.lon = "";
    }

}])


app.filter("tempMeasurement", function () {


    return function (display, selectedTemp) {
        if (selectedTemp === undefined) {
            return display;
        }
        if (selectedTemp === '°C') {
            return ((display - 32) * 5 / 9).toFixed(2) + '°C';
        } else if (selectedTemp === "°K") {
            return ((display + 459.67) * 5 / 9).toFixed(2) + "°K";
        } else {
            return display.toFixed(2) + "°F";
        }
    }
})
