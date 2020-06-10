angular.module('routerApp')
    .controller('LoginController', ['$scope', '$http', loginController]);

function loginController($scope, $http) {
    $scope.user = {};
    $scope.submit = function (isValid) {
        if (isValid) {
            console.log(window.btoa("user:pass"));
            $http({
                method: 'GET',
                url: 'https://c720g.sse.codesandbox.io/auth/signin', //hardcoding for deployment on live server
                headers: {
                    Authorization: 'Basic ' + window.btoa($scope.user.mail + ':' + $scope.user.password)
                },
            }).then(function successCallback(response) {
                alert('Successfully Signed In');
            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        }
    }
}
