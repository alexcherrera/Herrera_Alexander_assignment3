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

//Array's for Laptops model 1 & 2 received & missing
var receLaMod = [600, 450]//received Laptops Models
var missLaMod = [15, 12]//missing Laptops Models
//Array's for Desktops model 1 & 2 received & missing
var receDeMod = [300, 275]//received Desktops Models
var missDeMod = [8, 5]//missing Desktops Models
//Array's for Tablets model 1 & 2 received & missing
var receTaMod = [900, 600]//received Tablets Models
var missTaMod = [20, 14]//missing Tablets Models

console.log("Their should always be an extra amount of " + exMod1 + " " + naLapMod1 + " " + threePro[0] + "ordered, which is required.");

//Laptops Model 1 & 2 missing
	var lapMisMod1 = {//Laptop Missing Model 1
		mn1LtMis: 15//(MN1 Light Missing)Never passes this number(Can't)
	};
	var mod1Mis = lapMisMod1.mn1LtMis;
//Calculate Required Amount of weekly Laptops for Model 1
	var calReqLap = function ([amount1, amount2]) {
	
		var totBoLaRe = reqMod1 + reqMod2;//Total Both Laptop Models Required 
		var exMod1 = mod1So - reqMod1;//Extra amount of Laptop model 1 	
		var exMod2 = mod2So - reqMod2;//Extra amount of Laptop model 2
			if (amount < reLaMd1) {
				if (mod1Mis < exMod1) {
					console.log("Also for " + threePro[0] + " their should be an extra amount of " + exMod2 + " " + naLapMod2);
				} 
				else {
					console.log("This may result in a shortage of " + threePro[0]);
				}
			}

		return [exMod1,exMod2];
	};
	var retCalReqLap = calReqLap([mod1So,mod2So]);