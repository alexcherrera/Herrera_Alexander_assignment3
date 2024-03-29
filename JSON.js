//Laptop Model 1 & 2
	//All infomation for each product
		var lapBoMd = {//Both Laptop Models
			"model1": {
				"name": "MN1-Light",
				"price": 900,
				"size": 13,
				"durable": false
			},
			"model2": {
				"name": "MN2-Extreme",
				"price": 1500,
				"size": 15 ,
				"durable": true
			}
		};
		var desBoMd = {//Both Desktop Models
			"model1": {
				"name": "LD-Sheet",
				"price": 650,
				"size": 17,
				"printer": true//If it comes with a printer
			},
			"model2": {
				"name": "DLD-Quad",
				"price": 1300,
				"size": 21 ,
				"printer": false//If it comes with a printer
			}
		};
		var tabBoMd = {//Both Tablet Models
			"model1": {
				"name": "D-Screen",
				"price" : 350,
				"size": 8,
				"case": false//If a case is included
			},	
		 	"model2": {
		 		"name": "DX-Quad-Screen",
				"price": 650,
				"size": 10.5,
		    	"case": true//If a case is included
		    }
		};
//Number of employees working on each product & model
	var allthrPro = {//All three products & Models
		"lapMdsBo":[//Laptop Models Both
			{
				"product": "Laptop",
				"model": "MN1-Light",
				"laMdEm": 60,//(Laptop MN1-Light Employees)
			},
			{
				"product": "Laptop",
				"model": "MN2-Extreme",
				"laMdEm": 25//(Laptop MN2-Extreme Employees)
			}
		],
		"desMdsBo": [//Desktop Models Both
			{
				"product": "Desktop",
				"model": "LD-Sheet",
				"deMdEm": 30 //(Desktop LD-Sheet Employees)
			},
			{
				"product": "Desktop",
				"model": "DLD-Quad",
				"deMdEm": 20//(Desktop DLD-Quad Employees)
			}
		],
		"tabMdsBo": [//Tablet Models Both 
			{
				"product": "Tablet",
				"model": "D-Screen",
				"taMdEm": 90,//(Tablet D-Screen Employees)
			},
			{
				"product": "Tablet",
				"model": "DX-Quad-Screen",
				"taMdEm": 60//(Tablet DX-Quad-Screen Employees)
			}
		]
	};	



