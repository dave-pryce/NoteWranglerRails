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
	//console.log(issuelabels);
	angular.forEach(issuelabels, function(value,key){
 		  
		  if (value.name == "DP") {
			//console.log(value.name);
		  	return true;
		    };

	//	  if (value.name == "STB") {
		  //console.log("STB");
		  //return "STB";
	//	  };
		  
	});
	};


});