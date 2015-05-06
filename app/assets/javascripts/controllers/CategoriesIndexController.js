angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope, $location){
	$scope.categories = Category.query();
	// category flagged for deletion
	$scope.categoryDelete = [];
	//console.log($scope.categories);


		// Flag to Delete
		$scope.flagToDelete = function(category){
		console.log(category.id + " is flagged for deletion")
		//$scope.categoryDelete.push(angular.toJson(category));
		$scope.categoryDelete.push(category);

		// find position of undo category in array
		var index = $scope.categories.indexOf(category);
		console.log(index);
		// remove category from array 1 = move 1
		$scope.categories.push(index,1,'flaggedToDelete');
		console.log($scope.categories);
		//$scope.showUndo = true;
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
		// cancel timeout
		//$timeout.cancel(timeout);
		// find position of undo category in array
		var indexD = $scope.categoryDelete.indexOf(category);
		var index = $scope.categories.indexOf(category);
		//console.log(index);
		// remove (splice) category from array 1 = move 1
		$scope.categoryDelete.splice(indexD,1)
		// add undo category back to categories
		$scope.categories.push(category)
		};
		
	});