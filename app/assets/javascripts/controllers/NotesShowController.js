angular.module('NoteWrangler').controller('NotesShowController', function(note, $scope, $routeParams, $location){
	$scope.note = note.get({id: $routeParams.id});

	$scope.deleteNote = function(note){
		note.$remove().then(function(){
			$location.path("/notes/")

		});
	}

});