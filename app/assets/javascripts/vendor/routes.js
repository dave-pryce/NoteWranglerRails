angular.module('NoteWrangler').config(function($routeProvider){
	$routeProvider


	.when ('/', {
		redirectTo: '/notes'
	})
	
	.when('/notes', {
			//templateUrl : "assets/templates/notes/index.html",
			templateUrl : "templates/notes/index.html",
			controller: "NotesIndexController"
	})


	.when('/notes/new', {
			//templateUrl : "assets/templates/notes/new.html",
			templateUrl : "templates/notes/new.html",
			controller: "NotesCreateController"
	})


	// as :id can be anything this can get confused with /notes/new
	.when('/notes/:id', {
			//templateUrl : "assets/templates/notes/show.html",
			templateUrl : "templates/notes/show.html",
			controller: "NotesShowController"
	})


	.when('/notes/:id/edit', {
			//templateUrl : "assets/templates/notes/edit.html",
			templateUrl : "templates/notes/edit.html",
			controller: "NotesEditController"
	})

});