angular.module('wApp', [])
    .controller('newController', function($scope, $http, $q) {

        var d = $q.defer();
        navigator.geolocation.getCurrentPosition(function (position) {

            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            console.log($scope.latitude);
            console.log($scope.longitude);

            $http({
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
                method: "GET",
                params: {
                    APPID: 'fbc029d9f70206484de632a99fe24562',
                    lang: 'ru',
                    units: 'metric',
                    lat: $scope.latitude,
                    lon: $scope.longitude,
                    cnt: 4
                }
            }).then(function(response){
                $scope.weather = response.data;
                console.log($scope.weather)
            });

        });


        






    });

