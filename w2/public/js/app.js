/**
 * Created by Malena on 2017/1/11.
 */
var app = angular.module("tinyurlAPP", ["ngRoute", "ngResource"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        })
        .when("/urls/:shortUrl", {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        });
});