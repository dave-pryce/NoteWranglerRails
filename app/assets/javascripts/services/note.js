angular.module('NoteWrangler').factory('Note',function($resource){
	return $resource('/notes/:id.json', {id: "@id"},{
		update: {
			method: "PUT"
		}
	});
});