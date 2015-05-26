angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){

// get all data from githubIssue factory
	$scope.issues = Feature.query();
	//console.log($scope.issues);
	$scope.search = {};

	$scope.isDP = function(label){
		//console.log(label);
		if (label.name == "DP") {
		return true
		};
	};

	$scope.labelValue = function (){
	angular.forEach($scope.issues, function(value,key)
		{
		// console.log(value.labels);
		// return value.labels;

		 angular.forEach(value.labels,function(value,key){
		 	console.log(value.name);

		 });


		});
   };




});