angular.module('Defined')
  .controller('HomeCtrl', ['$scope', 'apiFactory',
    function ($scope, apiFactory) {






    $scope.list = [];
    $scope.submit = function() {
      if ($scope.text) {
        $scope.list.push(this.text);
        $scope.text = '';
      }
    };
  }]);
