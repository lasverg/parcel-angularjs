import angular from "angular";

angular.module("app", []).controller("ctrl", function($scope) {
  $scope.hi = "hello parcel angular app";
});

angular.bootstrap(document, ["app"]);
