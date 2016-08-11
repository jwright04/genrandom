/**
 * Sets the maximum length of a random number
 * @type {Function}
 * @private
 */
let maxLength = () => {

    return 20;
}

/**
 * Generates the random number
 * @type {Function}
 * @private
 */
let randomNumberGenerator = (length) => {
    if (length > maxLength()) {
        length = maxLength();
    }

    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1))
}

/**
 * Generates the random number character combination
 * @type {Function}
 * @private
 */
let randomNumberCharacterGenerator = (length) => {

    let possibleNumCharCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";

    for( var i=0; i < length; i++ ){
        text += possibleNumCharCharacters.charAt(Math.floor(Math.random() * possibleNumCharCharacters.length));
    }

    return text;
}

/**
 * Sets the type of random value being generated (number or number/characters)
 * @type {String}
 * @string
 */
let randomNumberChooser = null;

/**
 * Decision maker for what type of random value will be generated
 * @type {Function}
 * @private
 */
let decideRandomNumberTransformation = (argumentsObj) => {

    let segmentLength = argumentsObj.length;
    let finalNumber   = "";


    if (segmentLength === 1) {

        return (randomNumberChooser === "rNumber") ? randomNumberGenerator(argumentsObj[0]) : randomNumberCharacterGenerator(argumentsObj[0]);
    }

    for ( var i = 0 ; i < segmentLength ; i++ ) {

        finalNumber += `-${(randomNumberChooser === "rNumber") ? randomNumberGenerator(argumentsObj[i]) : randomNumberCharacterGenerator(argumentsObj[i])}`;
    }
    return finalNumber.substr(1);
}

/**
 * A function that returns a random number
 * @type {Function}
 * @public
 */
export function rNumber (...args) {

    let passedArgumnets = arguments;
    randomNumberChooser = "rNumber";
    return decideRandomNumberTransformation(passedArgumnets);
}

/**
 * A function that returns a combination of numbers and strings
 * @type {Function}
 * @public
 */
export function rNumChar(...args){

    let passedArguments = arguments;
    randomNumberChooser = "rNumChar";
    return decideRandomNumberTransformation(passedArguments);
}