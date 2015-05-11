angular.module("NoteWrangler").factory('Feature',function($resource){
	return $resource('https://api.github.com/repos/octocat/Hello-World/issues')
});