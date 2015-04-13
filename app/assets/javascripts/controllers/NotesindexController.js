angular.module('NoteWrangler').controller('NotesIndexController', function(Note,$scope){


// links into Note factory
 $scope.notes = Note.query();
// console.log($scope.notes);

});