angular.module('NoteWrangler').controller('UsersIndexController', function(user,$scope){


// links into note factory
 $scope.users = user.query();
// console.log($scope.notes);

});