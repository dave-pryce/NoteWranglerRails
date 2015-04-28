angular.module('NoteWrangler').controller('CategoriesCreateController', function(Category, $scope,  $location){
	$scope.category = new Category();
	$scope.submitting = false;


	$scope.saveCategory = function(category){
		$scope.submitting = true;
		// then only if successful finally finished could be successful or not.
		category.$save().then(function(){
			$location.path("/categories");
		}).finally(function(){
			$scope.submitting = false;
		});
	}

});