angular.module("NoteWrangler").factory('Category',function($resource){
	return $resource('/categories/:id', {id: "@id"},{
		update: {
			method: "PUT"
		}
	});
});