angular.module('NoteWrangler').controller('NotesCreateController', function(Note, User, Category, $scope,  $location){
	$scope.note = new Note();
	$scope.submitting = false;

	// querying from category and user services
	$scope.categories = Category.query();
	$scope.users = User.query();

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