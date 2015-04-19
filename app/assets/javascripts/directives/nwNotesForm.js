angular.module("NoteWrangler").directive('nwNotesForm', function(){
	return {
		replace : true,
		restrict : "E",
		templateUrl: "/templates/directives/nwNotesForm.html"
	};
});