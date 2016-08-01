// create controllers

isItSweatyOutApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.submit = function(forecast) {
        $location.path('forecast');
    };

}]);

isItSweatyOutApp.controller('forecastController', ['$scope', '$resource', '$log', '$routeParams', 'cityService', function($scope, $resource, $log, $routeParams, cityService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=34e2db53e3725c86a35e5ee93a322cc1', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

    $scope.convertToFahrenheit = function(degreesKelvin) {

        return Math.round((1.8 * (degreesKelvin - 273)) + 32);

    };

    $scope.convertDate = function(weatherDateObj) {

        return new Date(weatherDateObj * 1000);

    };

    $log.info("FYI: You look *fabulous* today. Keep up the good work!");

}]);
