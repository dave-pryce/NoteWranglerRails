angular.module('NoteWrangler').controller('NotesIndexController', function(note,$scope){


// links into Note factory
 $scope.notes = note.query();
// console.log($scope.notes);

});