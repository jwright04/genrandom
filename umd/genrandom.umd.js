(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["genrandom"] = factory();
	else
		root["genrandom"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rNumber = rNumber;
	exports.rNumChar = rNumChar;
	exports.rChar = rChar;
	exports.rNumCharSymbol = rNumCharSymbol;
	/**
	 * Sets the maximum length of a random number
	 * @type {Function}
	 * @private
	 */
	var maxLength = function maxLength() {
	    return 20;
	};
	
	/**
	 * Generates the random number
	 * @type {Function}
	 * @private
	 */
	var randomNumberGenerator = function randomNumberGenerator(length) {
	    if (length > maxLength()) {
	        length = maxLength();
	    }
	    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
	};
	
	/**
	 * Generates the random number character combination
	 * @type {Function}
	 * @private
	 */
	var randomNumberCharacterGenerator = function randomNumberCharacterGenerator(length) {
	    var possibleNumbers = "0123456789";
	    var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    var possibleSymbols = "~!@#$%^&*()+=?<>{}[]";
	    var possibleNumCharCharacters = randomNumberChooser === "rChar" ? "" + possibleLetters + possibleLetters.toLowerCase() : "" + possibleLetters + possibleLetters.toLowerCase() + possibleNumbers;
	
	    if (randomNumberChooser === "rChar") {
	        possibleNumCharCharacters = "" + possibleLetters + possibleLetters.toLowerCase();
	    } else if (randomNumberChooser === "rNumCharSymbol") {
	        possibleNumCharCharacters = "" + possibleLetters + possibleLetters.toLowerCase() + possibleSymbols + possibleNumbers;
	    } else {
	        possibleNumCharCharacters = "" + possibleLetters + possibleLetters.toLowerCase() + possibleNumbers;
	    }
	    var text = "";
	
	    for (var i = 0; i < length; i++) {
	        text += possibleNumCharCharacters.charAt(Math.floor(Math.random() * possibleNumCharCharacters.length));
	    }
	    return text;
	};
	
	/**
	 * Sets the type of random value being generated (number or number/characters)
	 * @type {String}
	 * @string
	 */
	var randomNumberChooser = null;
	
	/**
	 * Decision maker for what type of random value will be generated
	 * @type {Function}
	 * @private
	 */
	var decideRandomValueTransformation = function decideRandomValueTransformation(argumentsObj) {
	    var segmentLength = argumentsObj.length;
	    var finalNumber = "";
	
	    if (segmentLength === 1) {
	
	        switch (randomNumberChooser) {
	            case "rNumber":
	                return randomNumberGenerator(argumentsObj[0]);
	            case 'rNumChar':
	                return randomNumberCharacterGenerator(argumentsObj[0]);
	            case 'rNumCharSymbol':
	                return randomNumberCharacterGenerator(argumentsObj[0]);
	            default:
	                return randomNumberCharacterGenerator(argumentsObj[0]);
	        }
	    }
	
	    for (var i = 0; i < segmentLength; i++) {
	        finalNumber += "-" + (randomNumberChooser === "rNumber" ? randomNumberGenerator(argumentsObj[i]) : randomNumberCharacterGenerator(argumentsObj[i]));
	    }
	    return finalNumber.substr(1);
	};
	
	/**
	 * A function that returns a random number
	 * @type {Function}
	 * @public
	 */
	function rNumber() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    var passedArguments = arguments;
	    randomNumberChooser = "rNumber";
	    return decideRandomValueTransformation(passedArguments);
	}
	
	/**
	 * A function that returns a combination of numbers and strings
	 * @type {Function}
	 * @public
	 */
	function rNumChar() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }
	
	    var passedArguments = arguments;
	    randomNumberChooser = "rNumChar";
	    return decideRandomValueTransformation(passedArguments);
	}
	
	/**
	 * A function that returns a random string of characters with no numbers
	 * @type {Function}
	 * @public
	 */
	function rChar() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	    }
	
	    var passedArguments = arguments;
	    randomNumberChooser = "rChar";
	    return decideRandomValueTransformation(passedArguments);
	}
	
	function rNumCharSymbol() {
	    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	    }
	
	    var passedArguments = arguments;
	    randomNumberChooser = "rNumCharSymbol";
	    return decideRandomValueTransformation(passedArguments);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=genrandom.umd.js.map