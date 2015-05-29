angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){

// get all data from githubIssue factory
	$scope.issues = Feature.query();
	console.log($scope.issues);
	
	$scope.search = {};

	$scope.isDP = function(label){
		console.log(label.name);
		if (label.name == "DP") {return true};
	};



	//$scope.issueNo = function(issue){
	//	console.log(issue.number + " " + issue.title);
		//return issue.number + " " + issue.title;
		//return true;
	//};



	$scope.labelValue = function (issuelabels){ 
	//console.log(issuelabels);
	angular.forEach(issuelabels, function(value,key){
		//console.log(issue.number + ' ' + value.name);
 		  if (value.name == "DP") {
			//console.log(value.name);
		  	return true;
		   };
		});
	};


});