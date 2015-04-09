angular.module("NoteWrangler").factory('category',function($resource){
	return $resource('/categories/:id.json');
})