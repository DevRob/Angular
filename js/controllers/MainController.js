app.controller('MainController', ['$scope', function($scope) {
  var data = new Data();
  $scope.pages = data.pages;
  $scope.actualPage = $scope.pages[0];

  $scope.showPage = function(index) {
    $scope.actualPage = $scope.pages[index];
  };

}])
