app.directive('pages', function() {
  return {
    restrict: 'E',
    scope: {
      page: '=info'
    },
    template: '<h2> {{ page.description }} </h2>'
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
