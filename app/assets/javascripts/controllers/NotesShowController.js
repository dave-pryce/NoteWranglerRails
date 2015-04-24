angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});

	$scope.deleteNote = function(note){

	//	var yesDelete = confirm("Are you sure?");
	//		if (yesDelete == true){

				note.$remove().then(function(){
				$location.path("/notes/")
	//		};
	//		else {};
		});
	}
});