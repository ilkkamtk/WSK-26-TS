"use strict";
// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        // if type is number return the square of the number
        return value * value;
    }
}
// Prompt the user to enter a value as either a string or a number
const userInput = prompt('string tai numero');
console.log(isNaN(Number(userInput)));
const parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);
if (parsedValue) {
    // Call the lengthOrSquare function
    const result = lengthOrSquare(parsedValue);
    console.log(typeof result);
    console.log(result);
}
