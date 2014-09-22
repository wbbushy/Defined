angular.module('Defined')
    .controller('HomeCtrl', function ($scope) {
      $scope.list = [];
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    });
