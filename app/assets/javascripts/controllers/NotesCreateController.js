angular.module('NoteWrangler').controller('NotesCreateController', function($scope, note){
	$scope.note = new note();

	$scope.saveNote = function(note){
		note.$save()
	}




});