(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope) {
   $scope.list_menu = "input list";
   $scope.CheckIfTooMuch = function () {
    const words = $scope.list_menu.split(',');
    var counter=words.length-1;
  //  console.log(counter.toString());
    if (counter<3) {
      return "Enjoy!";
    }
    else{
      return counter + " Is Too much!";
    }

  };
 $scope.Clear = function () {
    $scope.list_menu="";
 };
}
})();
