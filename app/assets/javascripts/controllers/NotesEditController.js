angular.module('NoteWrangler').controller('NotesEditController', function(note, $scope, $routeParams, $location){
	$scope.note = note.get({id: $routeParams.id});
	$scope.submitting = false;

	$scope.saveNote = function(note){
		$scope.submitting = true;
		note.$update().finally(function(){
			$scope.submitting = false;
			$location.path("/notes/" + note.id)
		});
	}

});