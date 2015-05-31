angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){

// get all data from githubIssue factory
	$scope.issues = Feature.query();
	//console.log($scope.issues);
	
	$scope.search = {};

	$scope.isDP = function(label){
		//console.log(label.name);
		if (label.name == "DP") {return true};
	};




	$scope.labelValue = function (issuelabels){ 
	//console.log(issuelabels);
	var dp
	angular.forEach(issuelabels, function(value,key){
		//console.log(issue.number + ' ' + value.name);
 		  if (value.name == "DP") {dp = true};
 		  	//console.log(value.name + " " + false);
 		});
		return dp
	};


	$scope.filterDP = function(){
	angular.forEach($scope.issues, function(value,key){
		var id = value.id
		//console.log($scope.issues);
		angular.forEach(value.labels, function(value,key){
			if (value.name == "DP") {
			console.log(id + " " + value.name);
		};
		});
	});

	};

	$scope.filterSTB = function(){
	angular.forEach($scope.issues, function(value,key){
		var id = value.id
		//console.log($scope.issues);
		angular.forEach(value.labels, function(value,key){
			if (value.name == "STB") {
			console.log(id + " " + value.name);
		};
		});
	});

	};


});