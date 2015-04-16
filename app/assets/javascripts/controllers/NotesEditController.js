angular.module('NoteWrangler').controller('NotesEditController', function(Note, User, Category, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.submitting = false;
	
	// querying from category and user services
	$scope.categories = Category.query();
	$scope.users = User.query();

	$scope.saveNote = function(note){
		$scope.submitting = true;
		note.$update().finally(function(){
			$scope.submitting = false;
			$location.path("/notes/" + note.id)
		});
	}

});