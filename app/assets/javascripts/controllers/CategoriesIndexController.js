angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope, $location, $timeout){
	$scope.categories = Category.query();

		// Flag to Delete
		$scope.flagToDelete = function(category){
		console.log(category.id + " is flagged for deletion")
		// add flagged to delete property to category
		category['flaggedToDelete'] = true;
		//console.log($scope.categories)
		//var index = $scope.categories.indexOf(category);
		//console.log(index);
		
		//var categoryTimeOut = category.id
		//console.log(categoryTimeOut)
		//time out delete----------------------
		// define unique reference for the time out for this category
		     //$scope.cTimeOut = category.id;
		     //var timeout = category.id;
		     //console.log($scope.cTimeOut + " Is waiting for timeout");
		     //$scope.cTimeOut = 
		     category.$$hashkey = $timeout(function(){
				category.$remove().then(function(){
				$scope.categories.splice($scope.categories.indexOf(category),1)
				console.log(category.id + " Deleted by timeout");
				});
				}, 6000); 
		     
		     

		};

		// final delete
		$scope.deleteCategory = function(category){
		// Cancel timeout
		$timeout.cancel(category.$$hashkey);
		// then delete
		console.log(category.id + " Deleted");
			category.$remove().then(function(){
				$scope.categories.splice($scope.categories.indexOf(category),1)
		});
		};

		// Undo delete
		$scope.undoDelete = function(category){
		// remove flagged to delete property from category
		delete category.flaggedToDelete;
		console.log(category.id + " flagged to delete property removed")
		//console.log($scope.categories);
		// cancel timeout
		$timeout.cancel(category.$$hashkey);
		console.log(category.id + " Time out cancelled")
		};
		
	});