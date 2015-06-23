angular.module('NoteWrangler').controller('UsersCreateController', function(User, $scope,  $location){
	$scope.user = new User();
	$scope.submitting = false;


	$scope.saveUser = function(user){
		$scope.submitting = true;
		// then only if successful finally finished could be successful or not.
		user.$save().then(function(){
			$location.path("/users");
		}).finally(function(){
			$scope.submitting = false;
		});
	}

});