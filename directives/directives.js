// create directives

isItSweatyOutApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: './directives/templates/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertTheDate: "&",
            dateFormat: "@"
        }
    };
});
