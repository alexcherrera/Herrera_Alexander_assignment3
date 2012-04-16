//Sold Products but separated by different objects
	//Property Array 
		var solLap = {//Weekly on average
			models: [
			 	"MN1Light",//Model 1
			 	"MN2Extreme"//Model 2
			], 
			sold: [
				525,//Model 1 
				375//Model 2
			],
			returned: [
				15,//Model 1
				13//Model 2
			]
		};

//Employee's
//JSON data
var numEmpLa = {//(Number of Employees Laptops)
	"emplMo1&2": [//(Employees Models 1 & 2)
		{
			"lapMN1Em" : 60,//(Laptop MN1-Light Employees)
			"lapMN2Em" : 25//(Laptop MN2-Extreme Employees)
	]
};

//Each object has Properties of the three products
	//Consist of Properties (Number and String) 	
 		//Object of Laptops
 			var	objLap = {	
				model1: {
					name: "MN1-Light",
					price: 900,
					size: "13 inches"
				},	
		 		model2: {
		 			name: "MN2-Extreme",
					price: 1500,
					size: "15 inches"
		 		}
			};

var calOneLap = function(lapInd) {
	var storSolLapMo = solLap.models[lapInd];
	var storSolLapSold = solLap.sold[lapInd];
	var storSolLapRet = solLap.returned[lapInd];
	
}


var calAllLap = function () {
	for (var lapInd = 0; lapInd < solLap.models.Length; lapInd++) {
		calOneLap(lapInd);
	}
};