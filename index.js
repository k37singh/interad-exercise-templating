var app = angular.module('interad-exercise', []);

    app.controller('mainController', function($scope) {

        $scope.checkError = function () {
            if($scope.phNum == null || $scope.phNum == ""){
                $scope.error = true;
            }
            else{
                $scope.error = false;
            }
            console.log("btn clicked")
        }; 
    });