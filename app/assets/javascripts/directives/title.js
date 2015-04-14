angular.module("NoteWrangler").directive('title', function($timeout){
  return function(scope, element, attrs) {
    $timeout(function(){
      $(element).tooltip()
    });
  }
});