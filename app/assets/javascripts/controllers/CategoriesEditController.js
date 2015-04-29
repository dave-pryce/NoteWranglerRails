angular.module("NoteWrangler").controller("CategoriesEditController", function(Category, $scope, $routeParams, $location){
	$scope.category = Category.get({id: $routeParams.id});
	$scope.submitting = false;
	$scope.showUndo = false;


	// Save categroy
	$scope.saveCategory = function(category){
		$scope.submitting = true;
		category.$update().finally(function(){
			$scope.submitting = false;
			$location.path("categories")
		});
	}

	// Mark to Delete
	$scope.flagToDelete = function(category){
		console.log(category.id + " is flagged for deletion")
		$scope.showUndo = true;
	}


	// Undo delete
	$scope.undoDelete = function(){
		$scope.showUndo = false;
	}



	// final delete
	$scope.deleteCategory = function(category){
				category.$remove().then(function(){
				$location.path("/categories/")
		});
	}

});