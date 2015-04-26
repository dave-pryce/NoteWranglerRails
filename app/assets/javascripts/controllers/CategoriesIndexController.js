angular.module('NoteWrangler').controller('CategoriesIndexController', function(Category, $scope){
	$scope.categories = Category.query();
});