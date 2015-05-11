angular.module("NoteWrangler").factory('Feature',function($resource){
	return $resource('https://api.github.com/repos/dave-pryce/notewranglerrails/issues')
});