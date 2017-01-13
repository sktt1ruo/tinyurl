/**
 * Created by Malena on 2017/1/12.
 */
angular.module("tinyurlAPP")
    .controller("urlController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $http.get("/api/v1/urls/" + $routeParams.shortUrl)
            .success(function (data) {
                $scope.longUrl = data.longUrl;
                $scope.shortUrl = data.shortUrl;
                $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
            });
    }]);