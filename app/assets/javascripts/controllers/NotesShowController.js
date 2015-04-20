angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});

	// querying from category and user services
	// Single user
	//var noteobj = $scope.note;
	//console.log(noteobj);
	//console.log(user_id);
	//$scope.user = User.get({id: '$scope.note.user_id'});
	//$scope.category = Category.get({id: 7});
	
	// all users and categories
	//$scope.users = User.query();
	//$scope.categories = Category.query();

	//console.log($scope.note);
	//console.log($scope.user);
	//console.log($scope.category);
	
	$scope.deleteNote = function(note){
		note.$remove().then(function(){
			$location.path("/notes/")

		});
	}

});