angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){

// get all data from githubIssue factory
	$scope.issues = Feature.query();
	//console.log($scope.issues);
	$scope.search = {};

	$scope.isDP = function(label){
		//console.log(label);
		if (label.name == "DP") {return true};
	};

	$scope.labelValue = function (issuelabels){
	angular.forEach(issuelabels, function(value,key){
		  //console.log(issuelabels);
		  var dp
		  //console.log(value.name);
		  if (value.name == "DP") {
		  	dp = value.name + " is true";
		  	console.log(dp);
		  	return dp;
		  }
		
		  	
		});
	   };



});