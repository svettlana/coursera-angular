(function () {
'use strict';

angular.module('ShoppingListCheckOff', []) // 
.controller('ToBuyController', ToBuyController) //
.controller('AlreadyBoughtController', AlreadyBoughtController) //
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


var listToBuy = [
  {
    itemName: "Milk",
    itemQuantity: "2"
  },
  {
    itemName: "Donuts",
    itemQuantity: "200"
  },
  {
    itemName: "Cookies",
    itemQuantity: "300"
  },
  {
    itemName: "Chocolate",
    itemQuantity: "5"
  }
];

var listBought = [];

// ToBuyController
ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope,ShoppingListCheckOffService) {
  $scope.listToBuy = listToBuy;
  $scope.listBought = listBought;
  var list = this; // name listToBuy
  list.items = listToBuy;
    
  $scope.addToList = function (newItemName,newItemQuantity) {
    var newItem = {
      itemName: newItemName,
      itemQuantity: newItemQuantity
    };

    $scope.listBought.push(newItem);
  };

	$scope.removeItem = function (index) {
		 $scope.listToBuy.splice(index, 1);
  };

 $scope.nothingMessage=function(){
	 return $scope.listBought.length==0;
 };

$scope.boughtMessage=function(){
	 return $scope.listToBuy.length==0;
 };

  $scope.showConsole = function () {
    console.log(" $scope.listToBuy: ", $scope.nothingMessage());
  };

}

// AlreadyBoughtController
AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService']; //
function AlreadyBoughtController($scope,ShoppingListCheckOffService) {
 
}

// ShoppingListCheckOffService  service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };
 
}

})();
