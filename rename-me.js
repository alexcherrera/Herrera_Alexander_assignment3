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
  
	var lapReMis = {//Laptops model 1 & 2 received & missing
	    receLaMod: [//received shipment Laptop Models
	    	600,//Model 1 
	    	450//Model 2
	    ],
		missLaMod: [//missing Laptops Models
			15,//Model 1 
			12//Model 2
		]
	};
	var desReMis = {//Array's for Desktops model 1 & 2 received & missing
		receDeMod: [//received Desktops Models
			300,//Model 1  
			275//Model 2
		]
		missDeMod: [//missing Desktops Models
			8,//Model 1  
			5//Model 2
		]
	};