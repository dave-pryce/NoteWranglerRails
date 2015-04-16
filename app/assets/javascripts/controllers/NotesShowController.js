angular.module('NoteWrangler').controller('NotesShowController', function(Note, User, Category, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});

	// querying from category and user services
	$scope.category = Category.get({id: 5});
	$scope.user = User.get({id: 10});


	$scope.deleteNote = function(note){
		note.$remove().then(function(){
			$location.path("/notes/")

		});
	}

});