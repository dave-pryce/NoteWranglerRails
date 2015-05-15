angular.module('NoteWrangler').controller('FeatureindexController', function(Feature, $scope){

// get all data from githubIssue factory
$scope.issues = Feature.query();
//console.log($scope.issues);
$scope.search = {};

});