/**
 * Created by Malena on 2017/1/11.
 */
angular.module("tinyurlAPP")
    .controller("homeController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
        $scope.submit = function () {
            $http.post("/api/v1/urls", {
                longUrl: $scope.longUrl
            }).success(function (data) {
                $location.path("/urls/" + data.shortUrl);
            });
        }
    }]);