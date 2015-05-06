angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope, $location){
	$scope.categories = Category.query();

		// Flag to Delete
		$scope.flagToDelete = function(category){
		//console.log(category.id + " is flagged for deletion")
		// add flagged to delete property to category
		category['flaggedToDelete'] = true;
		//console.log($scope.categories)

		};

		// final delete
		$scope.deleteCategory = function(category){
		// Cancel timeout
		//$timeout.cancel(timeout);
		// then delete
		//console.log(category.id + "Deleted")
		$scope.category = Category.get({id: category.id});
			category.$remove().then(function(){
				$location.path("/categories/")
		});
		};

		// Undo delete
		$scope.undoDelete = function(category){
		// remove flagged to delete property
		delete category.flaggedToDelete;
		// cancel timeout
		//$timeout.cancel(timeout);
		};
		
	});