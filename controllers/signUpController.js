angular.module('routerApp')
    .controller('SignUpController', ['$scope', '$http', '$location', signUpController]);

function signUpController($scope, $http, $location) {
    $scope.user = {};
    $scope.submitUser = function (isValid) {
        if (isValid) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/auth/signup',
                data: JSON.stringify($scope.user)
            }).then(function successCallback(response) {
                alert('Successfully Signed UP');
                $location.url('/login');
            }, function errorCallback(response) {
                console.log("An error occured.Please try again later.");
            });
        }
    }
}