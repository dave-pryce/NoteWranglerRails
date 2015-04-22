angular.module('NoteWrangler').controller('UsersIndexController', function(User,$scope){


// links into user factory
 $scope.users = User.query();
 $scope.search = {};

});