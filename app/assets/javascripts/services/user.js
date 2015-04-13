angular.module('NoteWrangler').factory('User',function($resource){
	return $resource('/users/:id.json', {id: "@id"},{
		update: {
			method: "PUT"
		}
	});
});