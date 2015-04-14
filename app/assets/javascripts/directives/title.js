angular.module("NoteWrangler").directive('title', function($timeout){
  return function(scope, element, attrs) {
    $timeout(function(){
      $(element).tooltip()
    });

    // clean up to prevent memory leak.
    scope.$on('$destroy', function(){
    	$(element).tooltip('destroy');
    })
  }
});