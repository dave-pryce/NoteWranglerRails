angular.module('NoteWrangler').factory('user',function($resource){
	return $resource('/users/:id.json', {id: "@id"},{
		update: {
			method: "PUT"
		}
	});
});