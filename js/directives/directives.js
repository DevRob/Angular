app.directive('pages', function() {
  return {
    restrict: 'E',
    scope: {
      page: '=info'
    },
    template: '<h1> {{ page.description }} </h1>'
  };
});

app.directive('pageContent', function() {
  return {
    restrict: 'E',
    scope: {
      content: '='
    },
    templateUrl: 'js/directives/content.html'
  };
});
