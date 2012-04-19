//Global Variaibles: 
	//Strings
		var ceo = "Tim Roberts";
		var manager = "Suzy Miller";
		var compyName = "Tech Distribution";//(Company name)
	//Array
		var threePro = ["Laptop", " Desktop", " Tablet"];//(Three products)
		var allMd = ["model 1", "model 2"];
	//Number
		var quaOfEaMod = 2;//Quantity of each model
	//Boolean
		var numOfPro = true;//(Number of Products)Two different types of models for each products

//Stored values for each object
	//All infomation for each product 
		//(JSON) Laptop Model 1 
			var valLpMd1N = lapBoMd.model1.name;//(Value Laptop Model 1 name)
			var valLpMd1P = lapBoMd.model1.price;//(Value Laptop Model 1 price)
			var valLpMd1S = lapBoMd.model1.size;//(Value Laptop Model 1 size)
			var valLpMd1D = lapBoMd.model1.durable;//(Value Laptop Model 1 durable)
		//(JSON) Laptop Model 2
			var valLpMd2N = lapBoMd.model2.name;//(Value Laptop Model 2 name)
			var valLpMd2P = lapBoMd.model2.price;//(Value Laptop Model 2 price)
			var valLpMd2S = lapBoMd.model2.size;//(Value Laptop Model 2 size)
			var valLpMd2D = lapBoMd.model2.durable;//(Value Laptop Model 2 durable)
		//(JSON) Desktop Model 1 
			var valDeMd1N = desBoMd.model1.name;//(Value Desktop Model 1 name)
			var valDeMd1P = desBoMd.model1.price;//(Value Desktop Model 1 price)
			var valDeMd1S = desBoMd.model1.size;//(Value Desktop Model 1 size)
			var valDeMd1Pr = desBoMd.model1.printer;//(Vaue Desktop Model 1 printer)
		//(JSON) Desktop Model 2
			var valDeMd2N = desBoMd.model2.name;//(Value Desktop Model 2 name)
			var valDeMd2P = desBoMd.model2.price;//(Value Desktop Model 2 price)
			var valDeMd2S = desBoMd.model2.size;//(Value Desktop Model 2 size)
			var valDeMd2Pr = desBoMd.model2.printer;//(Vaue Desktop Model 2 printer)
		//(JSON) Tablet Model 1
			var valTaMd1N = tabBoMd.model1.name;//(Value Tablet Model 1 name)
			var valTaMd1P = tabBoMd.model1.price;//(Value Tablet Model 1 price)
			var valTaMd1S = tabBoMd.model1.size;//(Value Tablet Model 1 size)
			var valTaMd1Ca = tabBoMd.model1.case;//(Value Tablet Model 1 case)
		//(JSON) Tablet Model 2
			var valTaMd2N = tabBoMd.model2.name;//(Value Tablet Model 2 name)
			var valTaMd2P = tabBoMd.model2.price;//(Value Tablet Model 2 price)
			var valTaMd2S = tabBoMd.model2.size;//(Value Tablet Model 2 size)
			var valTaMd2Ca = tabBoMd.model2.case;//(Value Tablet Model 2 case)
//Number of employees working on each product & model	
	//(JSON) All three products & Models
		//Laptop Models
			var valMN1Em = allthrPro.lapMdsBo[0].lapMN1Em;//(Value of Laptop MN1-Light Employees)
			var valMN2Em = allthrPro.lapMdsBo[1].lapMN2Em;//(Value of Laptop MN2- Employees)
		//Desktop Models
			var valLDSEm = allthrPro.desMdsBo[0].deLDShEm;//(Value of Desktop LD-Sheet Employees)
			var valDLDEm = allthrPro.desMdsBo[1].deDLDShEm;//(Value of Desktop DLD-Quad Employees)
		//Tablet Models
			var valDScEm = allthrPro.tabMdsBo[0].taDScrEm;//(Value of Tablet D-Screen Employees) 
			var valDXQScEm = allthrPro.tabMdsBo[1].taDXQScEm;//(Value of Tablet D-Screen Employees)

//Starting Sentence	using an array	
	//Used the threePro array individually so the sentence would sound grammatically correct by having "and" before tablet
		console.log(ceo + " is the CEO of the company "+ compyName + ", which sells " + threePro[0] + " and" + threePro[1] + " devices.");
			//if else of the number of models for each product	
				if (numOfPro == true) {
					console.log(compyName + " offers " + quaOfEaMod + " different models for each product.");
				} else {
					console.log(ceo + " has to fire someone for false advertising");
				};
//Reason for presentation
console.log("The reason for " + ceo + " to be back in town was to present with the manager of operations " + manager + " the new " + quaOfEaMod+ " models for each of the products.");
console.log("Once the presentation started" + ceo + " discussed about the current devices and the new " + threePro[0] + " and" + threePro[1] + " models that were going to be presented.");
//Products presented
	//Laptop Model 1 & 2
		console.log("He first displayed the " + threePro[0] + " " + allMd[0] + " called " + valLpMd1N + " that is priced at $" + valLpMd1P + ".");
		console.log("Few minutes later " + allMd[1] + " " +threePro[0] + " called " + valLpMd2N + " was presented as having top quality features and priced at $" + valLpMd2P + ".");
		//Compare & Nested Conditional
			console.log("After presenting both models " + ceo + " compared both the " + valLpMd1N + " and " + valLpMd2N + " " + threePro[0] + "s by size and how durable the devices are.");
				if (valLpMd2S > valLpMd1S ) {
					if (!valLpMd2D == valLpMd1D) {
						console.log("The " + valLpMd1N + " has a size of " + valLpMd1S + " making it not durable compared to the " + valLpMd2N + " that is " + valLpMd2S + " inches.");
					}
					else {
						console.log("The " + valLpMd1N + " is not desized to be durable comapred to the " + valLpMd2N + ".");
					}
				}
				else {
					console.log("The " + valLpMd2N + " is the only durable device.");
				};
	//The Manager finishing the last two devices	
		console.log("After " + ceo + " demonstrated the " + threePro[0] + " models, " + manager + " went to the stage to present the" + threePro[1] + " and" + threePro[2] + " models.");
	//Desktop Model 1 & 2
		console.log("The new" + threePro[1] + ", " + allMd[0] + " is called the " + valDeMd1N + " priced at $" + valLpMd1P + " with the monitor having a size of " + valDeMd1S + " inches.");
			if (valDeMd1Pr == true) {
				console.log("Included with the purchase of the " + valDeMd1N + " model is a printer at no extra cost.");
			} else {
				console.log("Their is no printer included with this purchase.");
			};
			console.log("The second" + threePro[1] + ", " + allMd[1] + " is called " + valDeMd2N + ",");
				do {
					if (valLpMd2P > valLpMd1P) {
						console.log("which is at a higher price compared to the " + valLpMd1N + ". " + valDeMd2N + " is priced at $" + valLpMd2P + " and has a monitor size of " + valDeMd2S + " inches.");
					} else {
						console.log("is priced at $" + valLpMd2P + " with top quality features.");
					}
					console.log("An individual asked if the rumors were true if a printer was included with the " + valDeMd2N + " model and " + manager + " said that the rumors are " + valDeMd2Pr + ".");
				} while (!valDeMd2Pr == false);
		
	//Tablet Model 1 & 2
		//Tablet Model 1
			console.log(manager + " stated \"we are proud to present a new product line called the" + threePro[2] + " that also has " + quaOfEaMod + " models.\"");
			console.log("First she compares the thickness of the" + threePro[2] + " with the " + threePro[0] + " using the first model, called the " + valTaMd1N + ".");
			console.log("The " + valTaMd1N + " is the cheapest device that " + compyName + " offers at a price of $" + valTaMd1P + " and it's " + valTaMd1S + " inches.");
	


	var funTabCaMd1 = function (MustValue) {
		var reqSizeTabMd = 9.5;
		if (MustValue < reqSizeTabMd){
			console.log(compyName + " has a policy that in order to receive a case at no extra cost, the size of the " + threePro[2] + " must be " + reqSizeTabMd + "\nand the " + valTaMd1N + " is " + MustValue + " inches.");
		} else {
			console.log("This model will be receiving a case with their purchase.");
		}
		return reqSizeTabMd;
	};
	var callFunTabCaMdReq = funTabCaMd1(valTaMd1S);
		//Tablet Model 2
			console.log("The Second model" + threePro[2] + " " + valTaMd2N + "that is the same price as the " + valDeMd2N + " and has a size of " + valTaMd2S + " inches.");
				var boolTabCaMd2 = function (check) {
				var checkAnswer;
				
					if (check > callFunTabCaMdReq){
						checkAnswer = true;
					} else {
						checkAnswer = false;
					}
					return checkAnswer;
	};
	var callFunBool = boolTabCaMd2(valTaMd2S);
			if(valTaMd2Ca == callFunBool){
				console.log("The " + valTaMd2N + " falls under the case policy because the size is " + valTaMd2S + " inches, meaning that it's " + callFunBool + ", \ntheir is no extra cost because it passes the requirement of " + callFunTabCaMdReq + " inches.");
			} else {
				console.log("This model will not be receiving a case with their purchase.");
			}
					
//Weekly Averages Laptop model 1 & 2 received, missing, returned(by customers)
	var lapRecMisRet = {//(Laptop Received, Missing, & Returned)
	    receLaMod: [//received shipment Laptop Models
	    	600,//Model 1 
	    	450//Model 2
	    ],
		missLaMod: [//missing Laptop Models
			15,//Model 1 
			12//Model 2
		],
		retLaMod: [//returned Laptop Models
			14,//Model 1
			13//Model 2
		]
	};
	//"Values stored" of Weekly Averages Laptop Model 1 & 2 received, missing, returned
		//Received 
			var stVReLaMd1 = lapRecMisRet.receLaMod[0];//(Stored Value Received Laptop Model 1)
			var stVReLaMd2 = lapRecMisRet.receLaMod[1];//(Stored Value Received Laptop Model 2)
		//Missing 
			var stVMisLaMd1 = lapRecMisRet.missLaMod[0];//(Stored Value Missing Laptop Model 1)
			var stVMisLaMd2 = lapRecMisRet.missLaMod[1];//(Stored Value Missing Laptop Model 2)
		//Returned
			var stVRtLaMd1 = lapRecMisRet.retLaMod[0];//(Stored Value Returned laptop Model 1)
			var stVRtLaMd2 = lapRecMisRet.retLaMod[1];//(Stored Value Returned laptop Model 2)
//Calculate "total" of Laptop model 1 & 2 received, missing, returned
	var totLaRecMisRet = {//Total Laptop Received Missing Returned
		totRecLaMd: {//Total Received Laptop Model
			calTotRecLaMd: function () {//Calculate Total Received Laptop Model
				totBoMdReLa = stVReLaMd1 + stVReLaMd2;//Total Both Model Received Laptop
				console.log(totBoMdReLa);
				return totBoMdReLa;
			},
		},
		totMisLaMd: {//Total Missing Laptop Model
			calTotMisLaMd: function () {//Calculate Total Missing Laptop Model
				totBoMdMisLa = stVMisLaMd1 + stVMisLaMd2;//Total Both Model Missing Laptop
				console.log(totBoMdMisLa);
				return totBoMdMisLa;
			},
		},
		totRetLaMd: {//Total Returned Laptop Model
			calTotRetLaMd: function ()  {//Calculate Total Returned Laptop Model
				totBoMdRet = stVRtLaMd1 + stVRtLaMd2;//Total Both Model Returned 
				console.log(totBoMdRetMd);
				return totBoMdRet;
			}
		}
	};
//Values stored for calculate "total" of Laptop model 1 & 2 received, missing, returned
	var calFuTReLaMd = totLaRecMisRet.totRecLaMd.calTotRecLaMd();//Call Function Total Received Laptop Model
	var calFuTMisLaMd = totLaRecMisRet.totMisLaMd.calTotMisLaMd();//Call Function Total Missing Laptop Model
	var calFuTMisLaMd = totLaRecMisRet.totMisLaMd.calTotMisLaMd();//Call Function Total Returned Laptop Model
//Weekly Averages Desktop model 1 & 2 received, missing, returned(by customers)
	var desRecMisRet = {//Array's for Weekly Averages Desktops model 1 & 2 received & missing, returned(by customers)
		receDeMod: [//received Desktop Models
			300,//Model 1  
			275//Model 2
		],
		missDeMod: [//missing Desktop Models
			8,//Model 1  
			5//Model 2
		],
		retDeMod: [//returned Desktop Models
			12,//Model 1  
			10//Model 2
		]
	};
	//"Values stored" of Weekly Averages Desktop Model 1 & 2 received, missing, returned
		//Received
			var stVReDeMd1 = desRecMisRet.receDeMod[0];//(Stored Value Received Desktop Model 1)
			var stVReDeMd2 = desRecMisRet.receDeMod[1];//(Stored Value Received Desktop Model 2)
		//Missing 
			var stVMisDeMd1 = desRecMisRet.missDeMod[0];//(Stored Value Missing Desktop Model 1)
			var stVMisDeMd2 = desRecMisRet.missDeMod[1];//(Stored Value Missing Desktop Model 2)
		//Returned
			var stVRtDeMd1 = desRecMisRet.retDeMod[0];//(Stored Value Returned Tablet Model 1)
			var stVRtDeMd2 = desRecMisRet.retDeMod[1];//(Stored Value Returned Tablet Model 2)

//Calculate "total" of Desktop model 1 & 2 received, missing, returned
	var totDesRecMisRet = {//Total Desktop Received Missing Returned
		totRecDesMd: {//Total Received Desktop Model
			calTotRecDesMd: function () {//Calculate Total Received Desktop Model
				totBoMdReDes = stVReDeMd1 + stVReDeMd2;//Total Both Model Received Desktop
				console.log(totBoMdReDes);
			},
		},
		totMisDesMd: {//Total Missing Desktop Model
			calTotMisDesMd: function () {//Calculate Total Missing Desktop Model
				totBoMdMisDes = stVMisDeMd1 + stVMisDeMd2;//Total Both Model Missing Desktop
				console.log(totBoMdMisDes);
			},
		},
		totRetLaMd: {//Total Returned Laptop Model
			calTotRetDesMd: function ()  {//Calculate Total Returned Laptop Model
				totBoMdRetDes = stVRtDesMd1 + stVRtDesMd2;//Total Both Model Returned
				console.log(totBoMdRet);
			}
		}
	};
	//var calFuTReDesMd = totDesRecMisRet.totRecDesMd.calTotRecDesMd;//Call Function Total Received Desktop Model
//calFuTReDesMd();

//Weekly Averages Tablet model 1 & 2 received, missing, returned(by customers)
	var tabRecMisRet = {//Array's for Weekly Averages Tablets model 1 & 2 received & missing, returned(by customers)
		receTaMod: [//received Tablet Models
			900, //Model 1  
			600//Model 2
		],
	 	missTaMod: [//missing Tablet Models
	 		20,//Model 1 
	 	    14//Model 2
	 	],
	 	retTaMod: [//returned Tablet Models
			17,//Model 1
			14//Model2
		]
	};
	//"Values stored" of Weekly Averages Tablet Model 1 & 2 received, missing, returned
		//Received
			var stVReTaMd1 = tabRecMisRet.receTaMod[0];//(Stored Value Received Tablet Model 1)
			var stVReTaMd2 = tabRecMisRet.receTaMod[1];//(Stored Value Received Tablet Model 2)
		//Missing 
			var stVMisTaMd1 = tabRecMisRet.missTaMod[0];//(Stored Value Missing Tablet Model 1)
			var stVMisTaMd2 = tabRecMisRet.missTaMod[1];//(Stored Value Missing Tablet Model 2)
		//Returned
			var stVRtTaMd1 = tabRecMisRet.retTaMod[0];//(Stored Value Returned Tablet Model 1)
			var stVRtTaMd2 = tabRecMisRet.retTaMod[1];//(Stored Value Returned Tablet Model 2)

//Calculate "total" of Desktop model 1 & 2 received, missing, returned
	var totTabRecMisRet = {//Total Tablet Received Missing Returned
		totRecTabMd: {//Total Received Tablet Model
			calTotRecTabMd: function () {//Calculate Total Received Tablet Model
				totBoMdReTab = stVReTaMd1 + stVReTaMd2;//Total Both Model Received Tablet
				console.log(totBoMdReTab);
			},
		},
		totMisTabMd: {//Total Missing Tablet Model
			calTotMisTabMd: function () {//Calculate Total Missing Tablet Model
				totBoMdMisTab = stVMisTaMd1 + stVMisTaMd2;//Total Both Model Missing Tablet
				console.log(totBoMdMisTab);
			},
		},
		totRetTabMd: {//Total Returned Tablet Model
			calTotRetTabMd: function ()  {//Calculate Total Returned Tablet Model
				totBoMdRetMd = stVRtTaMd1 + stVRtTaMd2;//Total Both Model Returned
				console.log(totBoMdRet);
			}
		}
	};
	var calFuTReTabMd = totTabRecMisRet.totRecTabMd.calTotRecTabMd;//Call Function Total Received Tablet Model
calFuTReTabMd();
//Sold Products on Weekly Averages
	var solAllPro = {//Sold All Products
		lapSolMd: [//Laptop Sold Models
			{
				model1: 525,//Laptop MN1-Light
			},
			{	
				model2: 370//Latop MN2-Extreme
			}
		],
		desSolMd: [//Desktop Sold Models
			{
				model1: 235,//Desktop LD-Sheet
			},
			{
				model2: 225,//Desktop DLD-Sheet
			}
		],
		tabSolMd: [//Tablet Sold Models
			{
				model1: 840,//Tablet D-Screen
			},
			{
				model2: 530//Tablet DX-Quad-Screen
			}
		]
	};
	//"Values stored" of Sold Products based on Weekly Averages
		//Laptop Sold Models
			var stSolLaMd1 = solAllPro.lapSolMd[0].model1;//(Stored Sold Laptop Model 1)
			var stSolLaMd2 = solAllPro.lapSolMd[1].model2;//(Stored Sold Laptop Model 2)
		//Desktop Sold Models
			var stSolDeMd1 = solAllPro.desSolMd[0].model1;//(Stored Sold Desktop Model 1)
			var stSolDeMd2 = solAllPro.desSolMd[1].model2;//(Stored Sold Desktop Model 2)
		//Tablet Sold Models
			var stSolTaMd1 = solAllPro.tabSolMd[0].model1;//(Stored Sold Tablet Model 1)
			var stSolTaMd2 = solAllPro.tabSolMd[1].model2;//(Stored Sold Tablet Model 2)

//Calculate "total" sold of Laptop, Desktop, and Tablet model 1 & 2
	var totSolAllPrMd = {//Total Sold All Product Models
		calTotSolAllMd: [//Calculate Total Sold All Models
			{
				calSolLaMd: function (one) {//Calculate Sold Laptop Model
					var totSolLaMd;
					var extrLaMd;
					totSolLaMd = one + stSolLaMd2;//Total Sold Laptop Models
					extrLaMd = calFuTReLaMd - totSolLaMd;
					console.log(totSolLaMd);
					console.log(extrLaMd);
						if(extrLaMd < totSolLaMd) {
							console.log(totSolLaMd + "rhis " + extrLaMd);
				
					}
					return extrLaMd;			
				}
			},
			{
		//calTotSolDesMd: //Calculate Total Sold Desktop Model
				calSolDesMd: function () {//Calculate Sold Desktop Models
					totSolDesMd = stSolDeMd1 + stSolDeMd2;//Total Sold Dektop Model
				//console.log(totSolDesMd);
				},
			},	
			{
		//calTotSolTabMd: {//Calculate Total Sold Tablet Model
			calSolTabMd: function () {//Calculate Sold Tablet Models
				totSolTabMd = stSolTaMd1 + stSolTaMd2;//Total Sold Tablet Models
				//console.log(totSolTabMd);
				}
			}
		]
	};
	
//console.log(calValStSolLaMd);

//Call "Values stored" of "Calculated Sold Products" based on Weekly Averages

	var calValStSolLaMd = totSolAllPrMd.calTotSolAllMd[0].calSolLaMd(stSolLaMd1);
	var calValStSoDesMd = totSolAllPrMd.calTotSolAllMd[1].calSolDesMd();
	var calValStSoTabMd = totSolAllPrMd.calTotSolAllMd[2].calSolTabMd();
	

	//var aryStSoVal = [calValStSolLaMd, calValStSoDesMd, calValStSoTabMd];		
		
			//console.log(aryStSoVal);

	//calValStSolLaMd;
//Calculate and Call "total" of devices sold
	//var totThrePro = function () {
	//	totSolAll = calValStSolLaMd + calValStSoDesMd + calValStSoTabMd;
	//	console.log(totSolAll);
	
//totThrePro();
//console.log(totSolAll);
//Calculate remaining products
var calRemaAllMd= {
	calRemaBoLaMd: {
		remaLaMd1: function (amount1) {//Calculate Remaining laptop Model 1
			var remaLaMd1 = amount1 - stSolLaMd1;//Remaining Laptop Model 1
			//console.log("Result is " + remaLaMd1 + " from " + stSolLaMd1);
			return remaLaMd1;
		},
		remaLaMd2: function (amount2) {//Calculate Remaining laptop Model 2
			var remaLaMd2 = amount2 - stSolLaMd2;//Remaining Laptop Model 2
			//console.log("Result is " + remaLaMd2 + " from " + stSolLaMd2);
			return remaLaMd2;
		},
		}
	};
	/*calRema
		remaLaMd2: function (amount2) {//Calculate Remaining laptop Model 2
			var remaLaMd2 = amount2 - stSolLaMd2;//Remaining Laptop Model 2
			console.log("Result is " + remaLaMd2 + " from " + stSolLaMd2);
			return remaLaMd2;
		},
	},

};*/
//var callFuRemaLaMd1 = calRemaAllMd.calRemaBoLaMd.remaLaMd1(stVReLaMd1);
//console.log(callFuRemaLaMd1);

//var callFuRemaLaMd2 = calRemaAllMd.calRemaBoLaMd.remaLaMd2(stVReLaMd2);
//console.log(callFuRemaLaMd2);



