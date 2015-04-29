angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope, $location){
	$scope.categories = Category.query();
	});