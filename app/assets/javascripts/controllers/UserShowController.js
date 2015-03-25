angular.module('NoteWrangler').controller('UsersShowController', function(user, $scope, $routeParams){
	$scope.user = user.get({id: $routeParams.id});

});