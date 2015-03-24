angular.module('NoteWrangler').controller('NotesEditController', function(note,$scope, $routeParams){
	$scope.note = note.get({id: $routeParams.id});

});