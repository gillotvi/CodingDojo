"use strict";

// Kata realised from http://codingdojo.org/cgi-bin/index.pl?KataRomanNumerals
describe("kataRomanNumeralsTests", function () {
    
	beforeEach(function () {
       
	});
	
	//Conversion from Arabic Number to Romans Numerals
	function convertNumberToRomanNumeral(normalNumberInput) {
		var romanNumericSymbols = [{nb:1000, ro:"M"}, {nb:500, ro:"D"}, {nb:100, ro:"C"}, {nb:50,ro:"L"}, {nb:10, ro :"X"}, {nb:5, ro:"V"}, {nb:1, ro:"I"}];
		
		if(isNaN(normalNumberInput)) throw new Error("This is not a valid Normal Number");
		var number = parseInt(normalNumberInput);
		if(number == 0) throw new Error("The Romans never discovered the number zero");
		if(number >= 3999) throw new Error("The Romans themselves didn\'t tend to go any higher");
		
		var result = "";
		for (var index = 0; index < romanNumericSymbols.length ; index++) {
			var currentRomanNumericSymbol = romanNumericSymbols[index];
			var integerPart = Math.floor(number / currentRomanNumericSymbol.nb);
			
			var modulo = number % currentRomanNumericSymbol.nb;
			//if ((modulo == 4) || (modulo == 9)) {
			//	result += romanNumericSymbols[index-1].ro + currentRomanNumericSymbol.ro;
			//	//todo number = number - modulo;
			//	continue;
			//}
			
			/*
			var divisionResult = number / currentRomanNumericSymbol.nb;
			if (divisionResult >= 0.8) {
				console.log("divisionResult : " + divisionResult); //todo delete this console.log
				result += romanNumericSymbols[index-1].ro + currentRomanNumericSymbol.ro;
				//todo number = number - modulo;
				continue;
			};
			*/
			
			if (integerPart > 0) {
				for(var j=0 ; j<integerPart ; j++) {
					result+= currentRomanNumericSymbol.ro;
				}
				number = modulo;
			};
		}
		return result;
	};
	
	//Unit Tests
    it("should be KO when equals alphabetic inputs", function() {
        expect(function(){ convertNumberToRomanNumeral("ABC"); } ).toThrow(new Error("This is not a valid Normal Number"));
	});
	
	it("should be KO when equals 0", function() {
        expect(function(){ convertNumberToRomanNumeral("0"); } ).toThrow(new Error("The Romans never discovered the number zero"));
	});
	
	it("should be KO when higher than 3999", function() {
        expect(function(){ convertNumberToRomanNumeral("4000"); } ).toThrow(new Error("The Romans themselves didn\'t tend to go any higher"));
	});
	
	it("should return 'II' when enter '2'", function() {
        expect(convertNumberToRomanNumeral("2")).toEqual("II");
	});
	
	it("should return 'IV' when enter '4'", function() {
        expect(convertNumberToRomanNumeral("4")).toEqual("IV");
	});
	
	it("should return 'V' when enter '5'", function() {
        expect(convertNumberToRomanNumeral("5")).toEqual("V");
	});
	
	it("should return 'X' when enter '10'", function() {
        expect(convertNumberToRomanNumeral("10")).toEqual("X");
	});
	
	it("should return 'MCMXCIX' when enter '1999'", function() {
        expect(convertNumberToRomanNumeral("1999")).toEqual("MCMXCIX");
	});
	
	it("should return 'MMMCMXCIX' when enter '3999'", function() {
        expect(convertNumberToRomanNumeral("3999")).toEqual("MMMCMXCIX");
	});
});