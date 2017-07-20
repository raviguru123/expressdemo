let app=angular.module("myapp",[]);
app.controller('indexCtrl', ['$scope', function($scope){
	$scope.init=function(){
		console.log("controller function init");
	}
	$scope.init();
}]);