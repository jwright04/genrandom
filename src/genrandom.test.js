import {expect} from 'chai';
import {rNumber, rNumChar, rChar, rNumCharSymbol} from './genrandom';

describe('rNumber', function () {
	it('should return a random number', function () {
		expect(rNumber(3)).to.be.ok;

	});
});

describe('rNumChar', function () {
	it('should return a random string with numbers and letters', function () {
		expect(rNumChar(5)).to.be.ok;

	});
});

describe('rChar', function () {
	it('should return a string of letters with no numbers', function () {
		let length           = 5;
		let containsANumber  = false;
		let randomCharacters = rChar(length);

		for ( var i = 0 ; i < randomCharacters.length ; i++ ) {

			if (!isNaN(Number(randomCharacters[i]))) {
				containsANumber = true;
			}
		}
		expect(containsANumber).to.be.false;
	});
});

describe('rNumCharSymbol', function () {
	it('should return a random string with a symbol', function () {
		let possibleSymbols     = "~!@#$%^&*()+=?<>{}[]";
		let possibleSymbolsArr  = possibleSymbols.split("");
		let randomNumCharSymbol = rNumCharSymbol(20);
		let containsSymbol      = false;

		for ( var i = 0 ; i < possibleSymbolsArr.length ; i++ ) {
			if (randomNumCharSymbol.indexOf(possibleSymbolsArr[i]) > -1) {
				containsSymbol = true;
				return;
			}
		}
		expect(containsSymbol).to.be.true;
	});
});