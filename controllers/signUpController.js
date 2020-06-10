angular.module('routerApp')
    .controller('SignUpController', ['$scope', '$http', '$location', signUpController]);

function signUpController($scope, $http, $location) {
    $scope.user = {};
    $scope.submitUser = function (isValid) {
        if (isValid) {
            $http({
                method: 'POST',
                url: 'https://c720g.sse.codesandbox.io/auth/signup', //hard coding for deployment on live server
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
