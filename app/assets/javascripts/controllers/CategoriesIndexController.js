angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope, $location){
	$scope.categories = Category.query();

		// Flag to Delete
		$scope.flagToDelete = function(category){
		//console.log(category.id + " is flagged for deletion")
		$scope.showUndo = true;
		};

		// final delete
		$scope.deleteCategory = function(category){
		// Cancel timeout
		//$timeout.cancel(timeout);
		// then delete
		//console.log(category.id + "Deleted")
		$scope.category = Category.get({id: category.id});
			category.$remove()
		};

		// Undo delete
		$scope.undoDelete = function(){
		// cancel timeout
		//$timeout.cancel(timeout);
		$scope.showUndo = false;
		};
		


	});