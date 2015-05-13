angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope){


// get all data from Note factory
 $scope.notes = Note.query();
 $scope.search = {};


});