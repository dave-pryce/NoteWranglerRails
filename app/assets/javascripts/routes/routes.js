angular.module('NoteWrangler').config(function($routeProvider){
	$routeProvider

	// notes
	.when ('/', {
		redirectTo: '/notes'
	})
	
	.when('/notes', {
			templateUrl : "templates/notes/index.html",
			controller: "NotesIndexController"
	})


	.when('/notes/new', {
			templateUrl : "templates/notes/new.html",
			controller: "NotesCreateController"
	})


	// as :id can be anything this can get confused with /notes/new
	.when('/notes/:id', {
			templateUrl : "templates/notes/show.html",
			controller: "NotesShowController"
	})


	.when('/notes/:id/edit', {
			templateUrl : "templates/notes/edit.html",
			controller: "NotesEditController"
	})


	// users
	.when('/users', {
			templateUrl : "templates/users/index.html",
			controller: "UsersIndexController"
	})

	.when('/users/:id', {
			templateUrl : "templates/users/show.html",
			controller: "UsersShowController"
	})


	// categories
	.when('/categories', {
		templateUrl : "templates/categories/index.html",
		controller: "CategoriesIndexController"
	})


	.when('/categories/new',{
		templateUrl : "templates/categories/new.html",
		controller: "CategoriesCreateController"
	})


	.when('/categories/:id/edit',{
		templateUrl : "templates/categories/edit.html",
		controller: "CategoriesEditController"
	})


	// github issues / features
		.when('/features',{
		templateUrl : "templates/features/index.html",
		controller: "FeatureindexController"
	})

    // about
    	.when('/about',{
		templateUrl : "templates/about.html",
		controller: "AboutController"
	})

});