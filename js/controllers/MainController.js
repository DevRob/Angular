app.controller('MainController', ['$scope', function($scope) {
  var data = new Data();
  $scope.pages = data.pages;
  $scope.actualPage = $scope.pages[0];

  $scope.showPage = function(index) {
    $scope.actualPage = $scope.pages[index];

    // var theta = 0,
    // carousel = document.getElementById('carousel'),
    // panelCount = carousel.children.length,
    // transformProp = Modernizr.prefixed('transform');
    //
    // theta += ( 360 / panelCount ) * index * -1;
    // carousel.style[ transformProp ] = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
  };

}])
