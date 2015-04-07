angular.module('NoteWrangler').controller('UsersIndexController', function(user,$scope){


// links into user factory
 $scope.users = user.query();


});