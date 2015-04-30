angular.module("NoteWrangler").controller("CategoriesEditController", function(Category, $scope, $routeParams, $location, $timeout){
	$scope.category = Category.get({id: $routeParams.id});
	$scope.submitting = false;
	$scope.showUndo = false;
	var timeout;

	// Save categroy
	$scope.saveCategory = function(category){
		$scope.submitting = true;
		category.$update().finally(function(){
			$scope.submitting = false;
			$location.path("categories")
		});
	}

	// Flag to Delete
	$scope.flagToDelete = function(category){
		//console.log(category.id + " is flagged for deletion")
		$scope.showUndo = true;


		//time out delete----------------------
		timeout = $timeout(function(){
				category.$remove().then(function(){
				$location.path("/categories/")
				});
				}, 6000);
		//------------------------------------

	}


	// Undo delete
	$scope.undoDelete = function(){
		$timeout.cancel(timeout);
		$scope.showUndo = false;
	}




	// final delete
	$scope.deleteCategory = function(category){
			// Cancel timeout
			$timeout.cancel(timeout);
			// then delete
				category.$remove().then(function(){
				$location.path("/categories/")
		});
		
	}

});