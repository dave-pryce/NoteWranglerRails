angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){


// get all data from githubIssue factory
 $scope.issues = Feature.query();
 $scope.flabel = [];
angular.forEach($scope.issues.flabel, function(value,key){
	$scope.flabel.push(value);
});
});