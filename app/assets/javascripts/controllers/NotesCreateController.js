angular.module('NoteWrangler').controller('NotesCreateController', function($scope, note, $location){
	$scope.note = new note();
	$scope.submitting = false;

	$scope.saveNote = function(note){
		$scope.submitting = true;
		// then only if successful finally finished could be successful or not.
		note.$save().then(function(){
			$location.path("/notes");
		}).finally(function(){
			$scope.submitting = false;
		});
	}

});