angular.module('NoteWrangler').controller('NotesShowController', function(note, $scope, $routeParams){
	$scope.note = note.get({id: $routeParams.id});


});