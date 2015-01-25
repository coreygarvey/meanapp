
function SpotifyController($scope, $http, $timeout) {
	$scope.loginUser = function() {
		$http.get('/login').success(function(data) {
			
			if (data.user_info) {
				console.log("Corey!!!")
				console.log(data.user_info)
			} else {
				alert(JSON.stringify(data));
			}
		});
	};
	
}