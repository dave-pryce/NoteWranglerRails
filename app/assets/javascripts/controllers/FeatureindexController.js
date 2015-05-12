angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){


// get all data from githubIssue factory
 $scope.issues = Feature.query();
 $scope.labels = [];
 angular.forEach($scope.labels, function(value,key){
 	$scope.labels.push(value)
 });
});