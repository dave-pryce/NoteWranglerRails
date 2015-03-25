angular.module('NoteWrangler').factory('note',function($resource){
	return $resource('/notes/:id.json', {id: "@id"},{
		update: {
			method: "PUT"
		}
	});
});