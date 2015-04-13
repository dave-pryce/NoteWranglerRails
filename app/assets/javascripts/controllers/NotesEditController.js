angular.module('NoteWrangler').controller('NotesEditController', function(note, category, $scope, $routeParams, $location){
	$scope.note = note.get({id: $routeParams.id});
	$scope.submitting = false;
	// querying from category service
	$scope.categories = category.query();
	

	$scope.saveNote = function(note){
		$scope.submitting = true;
		note.$update().finally(function(){
			$scope.submitting = false;
			$location.path("/notes/" + note.id)
		});
	}

});