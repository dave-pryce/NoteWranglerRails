angular.module('NoteWrangler').controller('CategoryCreateController', function(Category, $scope,  $location){
	$scope.category = new category();
	$scope.submitting = false;


	$scope.savecategory = function(category){
		$scope.submitting = true;
		// then only if successful finally finished could be successful or not.
		category.$save().then(function(){
			$location.path("/categorys");
		}).finally(function(){
			$scope.submitting = false;
		});
	}

});