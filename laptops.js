//Global Variaibles: 
	//Strings
		var ceo = "Tim Roberts";
		var manager = "Suzy Miller";
		var compyName = "Tech Distribution";//(Company name)
	//Array
		var threePro = ["Laptops ", " Desktops", " Tablets"];//(Three products)
	//Number
		var quaOfEaMod = 2;//Quantity of each model
	//Boolean
		var numOfPro = true;//(Number of Products)Two different types of models for each products

//Sold Products but separated by different objects
	//Property Array 
		var wk = "weekly";
		var	lapSol = {
			sold: [
				525,//Model 1 
				375//Model 2
			]
		};
		var	lapRet = {
			returned: [
				15,//Model 1
				13//Model 2
			]
		};
var src = "sold";
	console.log("On average based by " + wk + " inventory checks " + threePro[0] + src + " are estimated at " + lapSol.sold[0]);




	


//Employee's
//JSON data
var numEmpLa = {//(Number of Employees Laptops)
	"emplMo1&2": [//(Employees Models 1 & 2)
		{
			"lapMN1Em" : 60,//(Laptop MN1-Light Employees)
			"lapMN2Em" : 25//(Laptop MN2-Extreme Employees)
		}
	]
};

//Each object has Properties of the three products
	//Consist of Properties (Number and String) 	
 		//Object of Laptops
 			var	lapMod1 = {	
					name: "MN1-Light",
					price: 900,
					size: "13 inches",
			};
		 	var lapMod2 = {
		 			name: "MN2-Extreme",
					price: 1500,
					size: "15 inches",
		 			send: function() {
						prMod1 = lapMod1.price;
						prMod2 = lapMod2.price;
						console.log(prMod1 + prMod2);
		 			}
		 	};
			lapMod2.send();

/*var calOneLap = function(lapInd) {
	var storSolLapMo = solLap.models[lapInd];
	var storSolLapSold = solLap.sold[lapInd];
	var storSolLapRet = solLap.returned[lapInd];
	console.log(storSolLapMo);
	console.log("hey");
}


var calAllLap = function () {
	for (var lapInd = 0; lapInd < solLap.models.Length; lapInd++) {
		var fLapInd = solLap.models[lapInd];
		calOneLap(lapInd);
	}
};
calAllLap();*/ 