angular.module("NoteWrangler").directive('nwPageNav', function(){
	return {
		replace: true,
		restrict: "E",
		templateUrl: "/templates/directives/nwPageNav.html",
		controller: function($scope, $location){
			$scope.isPage = function(name){
		 	// regular expression to check for notes url
			//	/\/notes($|\/)/

			// use $location to detect path
				return new RegExp("/" + name + "($|/)").test($location.path());
			};
		}
	};

});