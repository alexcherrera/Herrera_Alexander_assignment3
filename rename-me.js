//Global Variaibles: 
	//Strings
		var ceo = "Tim Roberts";
		var manager = "Suzy Miller";
		var compyName = "Tech Distribution";//(Company name)
	//Array
		var threePro = ["Laptops", " Desktops", " Tablets"];//(Three products)
		var allMd = ["Mode 1", "Mode 2"];
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
			var valLpMd1C = lapBoMd.model1.compact;//(Value Laptop Model 1 compact)
		//(JSON) Laptop Model 2
			var valLpMd2N = lapBoMd.model2.name;//(Value Laptop Model 2 name)
			var valLpMd2P = lapBoMd.model2.price;//(Value Laptop Model 2 price)
			var valLpMd2S = lapBoMd.model2.size;//(Value Laptop Model 2 size)
			var valLpMd2C = lapBoMd.model2.compact;//(Value Laptop Model 2 compact)
		//(JSON) Desktop Model 1 
			var valDeMd1N = lapBoMd.model1.name;//(Value Desktop Model 1 name)
			var valDeMd1P = lapBoMd.model1.price;//(Value Desktop Model 1 price)
			var valDeMd1S = lapBoMd.model1.size;//(Value Desktop Model 1 size)
			var valDeMd1Pr = lapBoMd.model1.printer;//(Vaue Desktop Model 1 printer)
		//(JSON) Desktop Model 2
			var valDeMd2N = lapBoMd.model2.name;//(Value Desktop Model 2 name)
			var valDeMd2P = lapBoMd.model2.price;//(Value Desktop Model 2 price)
			var valDeMd2S = lapBoMd.model2.size;//(Value Desktop Model 2 size)
			var valDeMd2Pr = lapBoMd.model2.printer;//(Vaue Desktop Model 2 printer)
		//(JSON) Tablet Model 1
			var valTaMd1N = lapBoMd.model1.name;//(Value Tablet Model 1 name)
			var valTaMd1P = lapBoMd.model1.name;//(Value Tablet Model 1 price)
			var valTaMd1S = lapBoMd.model1.name;//(Value Tablet Model 1 size)
			var valTaMd1Ca = lapBoMd.model1.name;//(Value Tablet Model 1 case)
		//(JSON) Tablet Model 2
			var valTaMd2N = lapBoMd.model2.name;//(Value Tablet Model 2 name)
			var valTaMd1P = lapBoMd.model2.name;//(Value Tablet Model 2 price)
			var valTaMd1S = lapBoMd.model2.name;//(Value Tablet Model 2 size)
			var valTaMd1Ca = lapBoMd.model2.name;//(Value Tablet Model 2 case)
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
	console.log(ceo + " is the CEO of the company "+ compyName + ", which sells " + threePro + ".");
		//if else of the number of models for each product	
			if (numOfPro == true) {
				console.log(compyName + " offers " + quaOfEaMod + " different models for each product.");
			} else {
				console.log(ceo + " has to fire someone for false advertising");
			};
//Reason for presentation
console.log("The reason for " + ceo + " to be back in town was to present with the manager of operations " + manager + " the new " + quaOfEaMod+ " models for each of the products.");
//First Model Displayed
console.log("First presented was their " + threePro[0] + " models. "  + allMd[0] + " is called " + valLpMd1N + "that is priced at $" + valLpMd1P + ".");
//Second Model Displayed
console.log(allMd[1] + " was demonstrated by " + manager + " called " + valLpMd2N + " and priced at $" + valLpMd2P);
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
			var stlReLaMd1 = lapRecMisRet.receLaMod[0];//(Stored Value Received Laptop Model 1)
			var stlReLaMd2 = lapRecMisRet.receLaMod[1];//(Stored Value Received Laptop Model 2)
		//Missing 
			var stlMisLaMd1 = lapRecMisRet.missLaMod[0];//(Stored Value Missing Laptop Model 1)
			var stlMisLaMd2 = lapRecMisRet.missLaMod[1];//(Stored Value Missing Laptop Model 2)
		//Returned
			var stlRtLaMd1 = lapRecMisRet.retLaMod[0];//(Stored Value Returned laptop Model 1)
			var stlRtLaMd2 = lapRecMisRet.retLaMod[1];//(Stored Value Returned laptop Model 2)
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
			var stlReDeMd1 = desRecMisRet.receDeMod[0];//(Stored Value Received Desktop Model 1)
			var stlReDeMd2 = desRecMisRet.receDeMod[1];//(Stored Value Received Desktop Model 2)
		//Missing 
			var stlMisDeMd1 = desRecMisRet.missDeMod[0];//(Stored Value Missing Desktop Model 1)
			var stlMisDeMd2 = desRecMisRet.missDeMod[1];//(Stored Value Missing Desktop Model 2)
		//Returned
			var stlRtDeMd1 = desRecMisRet.retDeMod[0];//(Stored Value Returned Tablet Model 1)
			var stlRtDeMd2 = desRecMisRet.retDeMod[1];//(Stored Value Returned Tablet Model 2)
//Weekly Averages Desktop model 1 & 2 received, missing, returned(by customers)
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
			var stlReTaMd1 = tabRecMisRet.receTaMod[0];//(Stored Value Received Tablet Model 1)
			var stlReTaMd2 = tabRecMisRet.receTaMod[1];//(Stored Value Received Tablet Model 2)
		//Missing 
			var stlMisTaMd1 = tabRecMisRet.missTaMod[0];//(Stored Value Missing Tablet Model 1)
			var stlMisTaMd2 = tabRecMisRet.missTaMod[1];//(Stored Value Missing Tablet Model 2)
		//Returned
			var stlRtTaMd1 = tabRecMisRet.retTaMod[0];//(Stored Value Returned Tablet Model 1)
			var stlRtTaMd2 = tabRecMisRet.retTaMod[1];//(Stored Value Returned Tablet Model 2)

//Sold Products on Weekly Averages
	var solAllPro = {//Sold All Products
		lapSolMd: [//Laptop Sold Models
			{
				model1: 525,//Laptop MN1-Light
			},
			{	
				model2: 375//Latop MN2-Extreme
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
			var stSoLaMd2 = solAllPro.lapSolMd[1].model2;//(Stored Sold Laptop Model 2)
		//Desktop Sold Models
			var stSolDeMd1 = solAllPro.desSolMd[0].model1;//(Stored Sold Desktop Model 1)
			var stSolDeMd2 = solAllPro.desSolMd[1].model2;//(Stored Sold Desktop Model 2)
		//Tablet Sold Models
			var stSolTaMd1 = solAllPro.tabSolMd[0].model1;//(Stored Sold Tablet Model 1)
			var stSolTaMd2 = solAllPro.tabSolMd[1].model2;//(Stored Sold Tablet Model 2)


//Calculate 
