let app=angular.module("myapp",[]);
app.controller('indexCtrl', ['$scope','httpService', 
	function($scope,httpService){
		
		$scope.init=function(){
			httpService.getdata().then(function(response){
				console.log("response come from",response);
			},function(reason){})
		}


		$scope.init();
	}]);



app.factory('httpService', ['$http','$q',
	function($http,$q){
		return{
			getdata:function(){
				let defer=$q.defer();
				defer.resolve("this response come from factory");
				return defer.promise;
			}
		};
	}])