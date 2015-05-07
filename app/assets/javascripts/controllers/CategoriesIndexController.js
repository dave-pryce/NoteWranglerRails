angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope, $location, $timeout){
	$scope.categories = Category.query();

		// Flag to Delete
		$scope.flagToDelete = function(category){
		//console.log(category.id + " is flagged for deletion")
		// add flagged to delete property to category
		category['flaggedToDelete'] = true;
		//console.log($scope.categories)
		var index = $scope.categories.indexOf(category);
		console.log(index);
		

		//time out delete----------------------
		timeout = $timeout(function(){
				category.$remove().then(function(){
				$scope.categories.splice(index,1)
				console.log($scope.categories)
				});
				}, 6000);
		//-

		};

		// final delete
		$scope.deleteCategory = function(category){
		// Cancel timeout
		$timeout.cancel(timeout);
		// then delete
		//console.log(category.id + "Deleted")
			category.$remove().then(function(){
				$location.path("/categories/")
		});
		};

		// Undo delete
		$scope.undoDelete = function(category){
		// remove flagged to delete property from category
		delete category.flaggedToDelete;
		console.log($scope.categories);
		// cancel timeout
		$timeout.cancel(timeout);
		};
		
	});