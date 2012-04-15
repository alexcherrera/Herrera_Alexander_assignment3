//Global Variaibles: 
	//Strings
		var ceo = "Tim Roberts";
		var manager = "Suzy Miller";
		var compyName = "Tech Distribution";//Company name
	//Array
		var threePro = {
			proLine: ["Laptops", "Desktops", "Tablets"]//Three products
		};
	//Boolean
		var numOfPro = true;//Number of products


//Sold Products
	//Property Array 
		var solPro = {//Weekly on average
			infoSol: [
				{
					Laptops: {
						MN1Light: {
							sold: 525,
							returned: 15
						},
						MN2Extreme: {
							sold: 375,
							returned: 13
						},
					},
					Desktop: {
						LDSheet: {
							sold: 235,
							returned: 12
						},
						DLDSheet: {
							sold: 225,
							returned: 10
						},
					},
					Tabelts: {
						DScreen: {
							sold: 840,
							returned: 17
						},
						DXQuadScreen: {
							sold: 530,
							returned: 14
						},
					}	
				}
			]
		};
	

//JSON data
	var monInven = {//Monitoring Inventory Weekly on Average
		"Warehouse": {
			"Laptops": {
				"Employee's 1": {//Employee's working on model1 & information of products only
					"Number of employee's": 60,//Number of employee's working in this section
					"MN1-Light Received": 600,//Number of model1 shipments received in warehouse 
					"MN1-Light Missing": 15//Never passes this number(Can't)
				},
				"Employee's 2": {//Employee's working on model2 & information of products only
					"Number of employee's": 45,//Number of employee's working in this section
					"MN2-Extreme Received": 450,//Number of model2 shipments received in warehouse
					"MN2-Extreme Missing": 12//Never passes this number(Can't)
				},
			},		 
			"Desktop":{
				"Employee's 1": {//Employee's working on model1 & information of products only
					"Number of employee's": 30,//Number of employee's working in this section
					"LD-Sheet Received": 300,//Number of model1 shipments received in warehouse 
					"LD-Sheet Missing": 8//Never passes this number(Can't)
				},
				"Employee's 2": {//Employee's working on model2 & information of products only
					"Number of employee's": 20,//Number of employee's working in this section
					"DLD-Sheet Received": 275,//Number of model2 shipments received in warehouse
					"DLD-Sheet Missing": 5//Never passes this number(Can't)
				},
			},
			"Tablets": {
				"Employee's": {//Employee's working on model1 & information of products only
					"Number of employee's": 90,//Number of employee's working in this section
					"D-Screen Received": 900,//Number of model1 shipments received in warehouse 
					"D-Screen Missing": 20//Never passes this number(Can't)
				},
				"Employee's 2": {//Employee's working on model2 & information of products only
					"Number of employee's": 60,//Number of employee's working in this section
					"DX-Quad-Screen Received": 600,//Number of model2 shipments received in warehouse
					"DX-Quad-Screen Missing": 14//Never passes this number(Can't)
				}
			}		
		}
	};

//Object that has Properties of the three products
	//Consist of Properties (Number and String) 	
 		var	objPro = {	
			Laptops: {
				model: {
					name: "MN1-Light",
					price: 900,
					size: "13 inches"
				},	
		 		model2: {
		 			name: "MN2-Extreme",
					price: 1500,
					size: "15 inches"
		 		},
		 	},
		 	Desktops: {
		 		model1: {
					name: "LD-Sheet",
					price: 650,
					size: "17 inches"
				},	
		 		model2: {
		 			name: "DLD-Quad",
					price: 1300,
					size: "21 inches"
		    	},
		 	},
		 	Tablets: {
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
		 	} 
		};


console.log(threePro.proLine[1]);
console.log(objPro.Desktops.model2.name);
console.log("hello");