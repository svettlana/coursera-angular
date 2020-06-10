(function(){
	'use strict';


	angular.module("LunchCheck",[])
	.controller("LunchCheckController",lunchCheckController);
	lunchCheckController.$inject=['$scope'];


	function lunchCheckController($scope){
		$scope.lunchList="";
		$scope.message="";


		$scope.checkDishes=function(){
			var cnt=checkIfTooMuch();
			$scope.message=showMessage(cnt);
		};


		function checkIfTooMuch(){
			var lunchList=$scope.lunchList;
			if(lunchList.length>0){
				var count=0;
				var lunchMenu=lunchList.split(",");
				var lunchMenuSize=lunchMenu.length;
				for(var i=0;i<lunchMenuSize;i++){
					if(lunchMenu[i].trim().length>0){
						count++;
					}
				}
				return count;
			}
			else{
				return 0;
			}
		}

		function showMessage(cnt){
			if (cnt==0){
				return "Please enter data first";
			}
			else if(cnt<=3){
					return "Enjoy!";
				}
			else{
					return "Too Much!";
				}
		}
	}
	})();
