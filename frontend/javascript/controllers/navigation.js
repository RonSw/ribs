angular.module('ribs.controller.navigation', []).controller('NavigationController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);
