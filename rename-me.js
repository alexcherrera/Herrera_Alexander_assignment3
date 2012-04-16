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
			}
//Employee's	  

//Sold Products but separated by different objects
	//Property Array 
		var solLap = {//Weekly on average
			models: [
			 	"MN1Light",
			 	"MN2Extreme"
			], 
			sold: [
				525,
				375
			],
			returned: [
				15,
				13
			]
		};
		var	solDesk = {
			models: [
				"LDSheet",
				"DLDSheet"
			],
			sold: [
				235,
				225
			],
			returned: [
				12,
				10
			]
		};
		var	solTab = {
			models: [
				"DScreen",
				"DXQuadScreen"
			],
			sold: [
				840,
				530
			],
			returned: [
				17,
				14
			]
		};


//JSON data
var numEmp = {
	"employees": [
		{
			"lapMN1Em" : 60,
			"lapMN2Em" : 25,
			"deLDShEm" : 30,
			"deDLDShEm" : 20,
			"taDScreEm" : 90,
			"taDXQScEm" : 60
		}
	]
};
/*
	var monInven = {//Monitoring Inventory Weekly on Average(Warehouse)
			"laptops": [
				//Employee's working on model1 & information of products only
				{
					"worSec": "MN1-Light",//(Worker Section)
					"numbOEmp": 60,//(Number of employee's) working in this section
					"mn1LtRec": 600,//(MN1 Light Received)Number of model1 shipments received in warehouse 
					"mn1LtMis": 15//(MN1 Light Missing)Never passes this number(Can't)
				},
				//Employee's working on model2 & information of products only
				{
					"worSec": "MN2-Extreme",//(Worker Section)
					"numbOEmp": 45,//Number of employee's working in this section
					"mn1LtRec": 450,//Number of model2 shipments received in warehouse
					"mn1LtMis": 12//Never passes this number(Can't)
				}
			]	
		 
			"desktop": [
				//"Employee1": {//Employee's working on model1 & information of products only
				{
					"Numberofemployees": 30,//Number of employee's working in this section
					"LDSheetReceived": 300,//Number of model1 shipments received in warehouse 
					"LDSheetMissing": 8//Never passes this number(Can't)
				},
				{
				//"Employee 2": {//Employee's working on model2 & information of products only
					"Numberofemployees": 20,//Number of employee's working in this section
					"DLDSheetReceived": 275,//Number of model2 shipments received in warehouse
					"DLDSheetMissing": 5//Never passes this number(Can't)
				}
			]
	},
			"tablets": [
				//"Employee 1": {//Employee's working on model1 & information of products only
				{
					"Numberofemployees": 90,//Number of employee's working in this section
					"DScreenReceived": 900,//Number of model1 shipments received in warehouse 
					"DScreenMissing": 20//Never passes this number(Can't)
				},
				//"Employee 2": {//Employee's working on model2 & information of products only
				{
					"Numberofemployees": 60,//Number of employee's working in this section
					"DXQuadScreenReceived": 600,//Number of model2 shipments received in warehouse
					"DXQuadScreenMissing": 14//Never passes this number(Can't)
				}
			]			
	};
for (var key in monInven.Warehouse.Employee1) {
	var reWareHous = monInven.Warehouse.Employee1[key];

}
var emp1mod1 = monInven.Warehouse.Laptops.Employee1.Numberofemployees;
//calculating employee's per model 
var calEmploy = function() {
console.log(emp1mod1);
};
calEmploy();
*/
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
		//Object of Desktops	
			var objDesk = {
		 		model1: {
					name: "LD-Sheet",
					price: 650,
					size: "17 inches"
				},	
		 		model2: {
		 			name: "DLD-Quad",
					price: 1300,
					size: "21 inches"
	    		}
	   		};
	   	//Object of Tables
		 	var Tablets = {
		 		model1: {
					name: "D-Screen",
					price: 350,
					size: "8 inches"
				},	
		 		model2: {
		 			name: "DX-Quad-Screen",
					price: 650,
					size: "11 inches"
		    	}
		 	}; 
		