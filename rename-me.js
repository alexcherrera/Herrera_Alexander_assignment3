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
			//var mutValDeMd1S = desBoMd.model1.size(19);("Mutator Value Desktop Model 1 size");
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
			var durLaMd = function (compare) {//(Durable Laptop Model)
			console.log("After presenting both models " + ceo + " compared both the " + valLpMd1N + " and " + valLpMd2N + " " + threePro[0] + "s by size and how durable the devices are.");
				var disDurLaMd;
				if (valLpMd2S > valLpMd1S ) {
					if (!valLpMd2D == valLpMd1D) {	
						disDurLaMd = "not durable"; 
					}
					else {
						console.log("The " + valLpMd1N + " is not desized to be durable comapred to the " + valLpMd2N + ".");
					}
				}
				else {
					console.log("The " + valLpMd2N + " is the only durable device.");
				}
				return disDurLaMd;
				};
			var callDurLaMd = durLaMd(valLpMd1D);
			console.log("The " + valLpMd1N + " has a size of " + valLpMd1S + " inches making it " + callDurLaMd + " compared to the " + valLpMd2N + " that is " + valLpMd2S + " inches.");
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
					console.log("which is at a higher price compared to the " + valLpMd1N + ". " + valDeMd2N + " is priced at $" + valLpMd2P + " and has\n a monitor size of " + valDeMd2S + " inches, but we wanted to expose our customers to the amazing screen so we made it bigger to" + valDeMd1S + ".");
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

			var funTabCaMd1 = function (MustValue) {//Function Tablet Case Model1
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

//After presentation


	console.log("After the presentation " + ceo + " and " + manager + " had a meeting with all the employees of each product department (" + threePro[0] + threePro[1] + ", and" + threePro[2] + ")."); 
	console.log(ceo + " started by saying their will be a a group of people assigned to a specific product model to work on. ");	
	console.log("The list displayed: ");
	
		var empLapBoMd = function (employeeLap) {
			
			for (var l = 0; l < employeeLap.lapMdsBo.length; l++){
				
				var storEmpLapBoMd = employeeLap.lapMdsBo[l]; 
					console.log("Product type: " + storEmpLapBoMd.product + ", Model " + storEmpLapBoMd.model + ", Number of employee's: " + storEmpLapBoMd.laMdEm + ".");
				};
			
			};
		empLapBoMd = empLapBoMd(allthrPro);
		
		var empDesBoMd = function (employeeDes) {
			
			for (var d = 0; d < employeeDes.desMdsBo.length; d++){
				
				var storEmpDesBoMd = employeeDes.desMdsBo[d]; 
					console.log("Product type: " + storEmpDesBoMd.product + ", Model " + storEmpDesBoMd.model + ", Number of employee's: " + storEmpDesBoMd.deMdEm + ".");
				};
			
			};
		empDesBoMd = empDesBoMd(allthrPro);

		var empTabBoMd = function (employeeTab) {
			
			for (var t = 0; t < employeeTab.tabMdsBo.length; t++){
				
				var storEmpTabBoMd = employeeTab.tabMdsBo[t]; 
					console.log("Product type: " + storEmpTabBoMd.product + ", Model " + storEmpTabBoMd.model + ", Number of employee's: " + storEmpTabBoMd.taMdEm + ".");
				};
			
			};
		empTabBoMd = empTabBoMd(allthrPro);

		console.log("After the meeting " + ceo + " announced that he was going to be involded with the company.");



