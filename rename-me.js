//Global Variaibles: 
	//Strings
		var ceo = "Tim Roberts";
		var manager = "Suzy Miller";
		var compyName = "Tech Distribution";//(Company name)
	//Array
		var threePro = ["Laptops", " Desktops", " Tablets"];//(Three products)
	//Number
		var quaOfEaMod = 2;//Quantity of each model
	//Boolean
		var numOfPro = true;//(Number of Products)Two different types of models for each products

//Starting Sentence	using an array	
	console.log(ceo + " is the CEO of the company "+ compyName + ", which sells " + threePro + ".");
		//if else of the number of models for each product	
			if (numOfPro == true) {
				console.log(compyName + " offers " + quaOfEaMod + " difference models for each product.");
			} else {
				console.log(ceo + " has to fire someone for false advertising");
			};
  
	var lapRecMisRet = {//Weekly Averages Laptops model 1 & 2 received, missing, returned(by customers)
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
	var tabRecMisRet = {//Array's for Weekly Averages Tablets model 1 & 2 received & missing, returned(by customers)
		receTaMod: [//received Tablet Models
			900, //Model 1  
			600//Model 2
		],
	 	missTaMod: [//missing Tablet Models
	 		20,//Model 1 
	 	    14//Model 2
	 	],
	 	returned: [//returned Tablet Models
			17,//Model 1
			14//Model2
		]
	};
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
			var valAlThPr = allthrPro.lapMdsBo[0].lapMN1Em;//(Value All Three Products)





