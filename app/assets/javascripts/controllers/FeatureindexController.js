angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){


// get all data from githubIssue factory
 $scope.issues = Feature.query();
 $scope.labels = [];
 //console.log(Feature.query());

	angular.forEach($scope.issues, function(issue, index){
		angular.forEach(this.labels, function(label,index){
	$scope.labels.push(label.name);
   });
  });

console.log($scope.labels);
});