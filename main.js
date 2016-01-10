(function () {
    var TriangleController = function ($scope) {
        var displayTriangle,
            displayNumberOfRows;

        displayNumberOfRows = function () {
            if ($scope.rowsInput) {
                $scope.rows = $scope.rowsInput;
            }
        }
        displayTriangle = function () {

        }
        $scope.hello = 'Hola';
        $scope.displayTriangle = displayTriangle;
        $scope.displayNumberOfRows = displayNumberOfRows;
    }

    angular.module('PascalTriangleApp', [])
        .controller('TriangleController', TriangleController);
})();
