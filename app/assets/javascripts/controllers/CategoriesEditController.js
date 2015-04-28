angular.module("NoteWrangler").controller("CategoriesEditController", function(Category, $scope, $routeParams, $location){
	$scope.category = Category.get({id: $routeParams.id});
	$scope.submitting = false;

	$scope.saveCategory = function(category){
		$scope.submitting = true;
		category.$update().finally(function(){
			$scope.submitting = false;
			$location.path("categories")
		});
	}

});