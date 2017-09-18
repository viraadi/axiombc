
angular.module('itemStocksApp.controllers').controller('Ctrl1', SupplierStockItemsCtrl);

SupplierStockItemsCtrl.$inject = ['$scope', '$http'];

function SupplierStockItemsCtrl($scope, $http) 
{
	$scope.itemlistName='Sales Order #0777';
	 $scope.items = [
	        {
		        name: 'Pork Stock #0001'	,
	            units: '750 Units'
	         },
	         {
			    name: 'Pork Stock #0002'	,
		        units: '720 Units'
		     },
		     {
			        name: 'Pork Stock #0003'	,
		            units: '750 Units'
		         },
		         {
				    name: 'Pork Stock #0004'	,
			        units: '820 Units'
			     },
			     {
				        name: 'Pork Stock #0005'	,
			            units: '350 Units'
			         },
			         {
					    name: 'Pork Stock #0006'	,
				        units: '720 Units'
				     },
				     
				     {
					        name: 'Pork Stock #0007'	,
				            units: '550 Units'
				         },
				         {
						    name: 'Pork Stock #0008'	,
					        units: '720 Units'
					     }
		       
	    ]
	 };
	


	
	

