(function () {
    var TriangleController = function ($scope) {
        var displayTriangle,
            getRowsCollection;

        /* Function requested by ADP */
        displayTriangle = function () {
            var rowsCollection = [],
                thisArray = [],
                previousArray = [];

            for (var i = 0; i < $scope.rowsInput; i = i + 1) {
                for (var j = 0; j < i + 1; j = j + 1) {
                    if (j === 0) {
                        thisArray = [];
                        thisArray.push(1);
                    } else if (j === 1) {
                        thisArray = [];
                        thisArray.push(1);
                        thisArray.push(1);
                    } else if (j > 1) {
                        previousArray = thisArray;
                        thisArray = [];
                        for (var z = 0; z < previousArray.length; z = z + 1) {
                            if (previousArray[z + 1]) {
                                thisArray.push(previousArray[z] + previousArray[z + 1]);
                            }
                        }
                        thisArray.unshift(1);
                        thisArray.push(1);
                        previousArray = thisArray;
                    } else {
                        return undefined;
                    }
                }
                rowsCollection.push(thisArray);
            }

            $scope.rowsCollection = rowsCollection;
        }

        $scope.displayTriangle = displayTriangle;
        $scope.getRowsCollection = getRowsCollection;
    }

    angular.module('PascalTriangleApp', [])
        .controller('TriangleController', TriangleController);
})();
