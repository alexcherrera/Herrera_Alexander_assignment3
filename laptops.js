//Global Variaibles: 
	//Strings
		var ceo = "Tim Roberts";
		var manager = "Suzy Miller";
		var compyName = "Tech Distribution";//(Company name)
		var wk = "weekly";//Used throughout for weekly averages
	//Array
		var threePro = ["Laptops ", " Desktops", " Tablets"];//(Three products)
	//Number
		var quaOfEaMod = 2;//Quantity of each model
	//Boolean
		var numOfPro = true;//(Number of Products)Two different types of models for each products

//Sold Products on average "weekly" but separated by different objects
	//Object (Property Array)
		var	lapSol = {//Laptops Sold per model
			sold: [
				525,//Model 1 
				375//Model 2
			]
		};
			//Variables for sold Laptop Models that store arrays in objects(positions)
				var src = "sold";
				var mod1So = lapSol.sold[0];//Model 1 sold
				var mod2So = lapSol.sold[1];//Model 2 sold	
					console.log("On average based by " + wk + " inventory checks " + threePro[0] + src + " are estimated at " + mod1So);	
	//Object (Property Array)
		var	lapRet = {//Laptops returned
			returned: [
				15,//Model 1
				13//Model 2
			]
		};
			//Variables for sold Laptop Models that store arrays in objects(positions)
				var ret = "returned";
				var mod1re = lapRet.returned[0];//Model 1 returned
				var mod2re = lapRet.returned[1];//Model 2 returned
//Calculate Required Amount of weekly Laptops
	var calReqLap = function (amount1, amount2) {
		var totBoLapRe = amount1 + amount2;//Total amount for both laptop models "received"
		var reqMod1 = 500;//Requirement amount of Laptop model 1
		var reqMod2 = 350;//Requirement amount of Laptop model 2
		var exMod1 = mod1So - reqMod1;//Extra amount of Laptop model 1 
		var totBoLaRe = reqMod1 + reqMod2;//Total Both Laptop Models Required 
			if (reqMod1 < amount1) {
				console.log("Their is always an extra amount of " + exMod1 + " " + threePro[0] + "ordered.");
				return;
			}
		return exMod1;
	};
	calReqLap(mod1So, mod2So);



//JSON data employees
var numEmpLa = {//(Number of Employees Laptops)
	"emplMod": [//(Employees Models 1 & 2)
		{
			"lapMN1Em" : 60,//(Laptop MN1-Light Employees)
		},
		{
			"lapMN2Em" : 25//(Laptop MN2-Extreme Employees)
		}
	]
};

//JSON Data stored in values
	var callEm1 = numEmpLa.emplMod[0].lapMN1Em;
	var callEm2 = numEmpLa.emplMod[1].lapMN2Em;

	var emplMo1 = function (num1,num2) {
			var totEmBoth = num1 + num2; 
				//if ()

			console.log(" " + num1 + " " + num2);
				return totEmBoth;
				};
			emplMo1(callEm1,callEm2);
//Laptops Model 1 MN1-Light
//var lapMod1inf = function() {

//};
//lapMod1inf();
//Each object has Properties of the three products
	//Consist of Properties (Number and String) 	
 		//Object of Laptops
 			var	lapMod1 = {//Laptop Model 1	
				name: "MN1-Light",
				price: 900,
				size: "13 inches",
			};
		 	var lapMod2 = {//Laptop Model 2
	 			name: "MN2-Extreme",
				price: 1500,
				size: "15 inches",
		 	};
			var lapBoMod = {//Laptop Both Models
				send: function() {
						prMod1 = lapMod1.price;
						prMod2 = lapMod2.price;
						console.log(prMod1 + prMod2);
		 			}
			};
			lapBoMod.send();

