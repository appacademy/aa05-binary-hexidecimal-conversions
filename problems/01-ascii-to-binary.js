/*
Write a function called asciiToBinary that will take a string with ascii
characters and convert it to a binary string.
*/

// DO NOT MODIFY: Helper function that adds zeros to front of input, making each binary element "8-bit"
const addZeros = (str, newLength) => {
  if (str.length < newLength) {
    let newStr = str.padStart(newLength, '0');
    return newStr;
  }
};

const asciiToBinary = string => {
  // Your code here 
}

// hint: make sure output is in 8-bit form

// console.log(asciiToBinary("b"))     // "01100010"
// console.log(asciiToBinary("hello")) // "0110100001100101011011000110110001101111"


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = asciiToBinary;
