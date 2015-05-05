angular.module("NoteWrangler").directive('nwCategoryLabel', function(){
	return {
		replace : true,
		restrict : "E",
		templateUrl: "/templates/directives/nwCategoryLabel.html"
	};
});