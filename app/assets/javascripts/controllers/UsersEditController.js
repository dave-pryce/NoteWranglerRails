angular.module('NoteWrangler').controller('UsersEditController', function(User,$scope, $routeParams, $location){
	$scope.user = User.get({id: $routeParams.id});
	$scope.submitting = false;
	

	$scope.saveUser = function(user){
		$scope.submitting = true;
		user.$update().finally(function(){
			$scope.submitting = false;
			$location.path("/users/" + user.id)
		});
	}

});