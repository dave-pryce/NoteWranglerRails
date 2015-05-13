angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){


// get all data from githubIssue factory
 $scope.issues = Feature.query();
 $scope.ulabels = []

 console.log($scope.issues);
	angular.forEach($scope.issues, function(value, key){
	//$scope.ulabels.push( key + ':' + value);
	$scope.ulabels.push('XXXXX');
});

console.log($scope.ulabels);
});