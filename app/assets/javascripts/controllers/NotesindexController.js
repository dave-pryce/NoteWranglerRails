angular.module('NoteWrangler').controller('NotesIndexController', function(note,$scope){

 $scope.notes = Note.query();

});