// QUESTION 1
// write a program to add only positive integers in an array and return the sum.

// given array

const answer = (arr1) => {
  // set a pivot for calculation
  let sum_of_integer = 0;
  // loop through array
  for (let i = 0; i < arr1.length; i++) {
    // set varable for individual element of array
    let num = arr1[i];
    // set condition for elements
    if (num > 0) {
      // add result
      sum_of_integer += num;
    }
  }

  return sum_of_integer;
};
console.log(answer([1, 5, -6, 20, -5, 10, -8]));
// END OF SOLUTION

// QUESTION 2
// write a program to return an array second smallest value and second largest value..
// arr2 = [2, 5, 7, 8, 9] answer = [5, 8]

const answer2 = (arr2) => {
  // create an empty new array to store new values
  let newarr = [];
  // set variable for max and min element in arroy
  let min = Math.min(...arr2);
  let max = Math.max(...arr2);

  // create a loop for the array to get individual element
  for (let i = 0; i < arr2.length; i++) {
    // set variable for individual elements
    let elem = arr2[i];
    // set condition to remove max and min element
    if (elem !== min && elem !== max) {
      // push remanining elements into new empty array

      newarr.push(elem);
    }
  }
  // set max and min for new arry
  let min2 = Math.min(...newarr);
  let max2 = Math.max(...newarr);
  // create anothe array to carry max and min value for new array
  let newarr2 = [min2, max2];

  return newarr2;
};
console.log(answer2([2, 5, 7, 8, 9]));
// END OF SOLUTION

// QUESSION 3
//  write a program that remove negative or non integer from and array
// and return the sum of only positive integer
function sumonlynumber(arr) {
  // set a default value
  let sum = 0;
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // set variable for respective elements
    let elem = arr[i];

    // set condition to remove non interger
    if (typeof elem === "number") {
      // add all interget together
      sum += elem;
    }
  }
  return sum;
}
console.log(sumonlynumber([3, "6", 9, "5", 2]));
// END OF SOLUTION

// QUESSION 4
// Write a javaScript function to Seperate smaller case
// from upper case in the string below
//a string is a sequnce of characater. a, b c => abc
// given string
let message = "This is Port Harcourt";
//length;
function onlyLowest(arr) {
  // set variable for empty string to stare answers
  let result = "";
  let upper = "";
  // loop through the string
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    // set a condition for the seperate the letters using ther charCodeAt values
    if (arr.toUpperCase().includes(elem)) {
      // all small letters accoding to the charCodeAt vlaue is stored in result
      result += elem;
    } else {
      // not small letters is stored in upper value
      upper += elem;
    }
  }
  return { lower: result, uppercase: upper };
}
console.log(onlyLowest(message));
// END OF SOLUTION

// QUESSION 5
// write a javaScript function to remove the punctuations
// from the alphabets remove puntuation from the string
// given string
let letter = "This is, what i: love? most!";
function removepuntuation(str) {
  // set variable to store answer
  const validCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let sen = "";
  // loop through the string values
  for (elem of str) {
    if (validCharacters.includes(elem.toUpperCase()) || elem === " ") {
      sen += elem;
    }
  }
  return sen;
}

console.log(removepuntuation(letter));
console.log(removepuntuation("love ?!,good"));
// SOLUTION END

// Question 6
//     The Morse code encodes every character as a sequence of "dots" and "dashes".
//     For example, the letter A is coded as ·−, letter Q is coded as −−·−,
//  and digit 1 is coded as ·−−−.
//     The Morse code is case-insensitive, traditionally capital letters are used.
//     When the message is written in Morse code, a single space is used to separate the
//  character codes and 3 spaces are used to separate words.
//     For example, the message `Decadev` in Morse code is -.. . -.-. .- -.. . ...-
//     NOTE: Extra spaces before or after the code have no meaning and should be ignored.
// In addition to letters, digits and some punctuation,
//     there are some special service codes, the most notorious of those is the international
// distress signal SOS(that was first issued by Titanic), that is coded as ···−−−···.
//     These special codes are treated as single special characters, and usually are transmitted
// as separate words.
//     Your task is to implement a function that would take the morse code as input and return
// a decoded human - readable string.
//     For example.
//     ```js
//     decodeMorse("-.. . -.-. .- -.. . ...-");
//     should return "DECADEV"
//     Use the constant `MORSE_CODE` below to translate.

// Translator
const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

const decodeMorseValue = (morseCode) => {
  //SPLIT  morseCode
  let morseCodeArray = morseCode.split(" ");
  let decodedValue = "";
  //go through each letter in morseCodeArray
  for (let i = 0; i < morseCodeArray.length; i++) {
    //check the mapping of the element in the dictionary
    decodedValue += MORSE_CODE[morseCodeArray[i]];
  }

  return decodedValue;
};
console.log(decodeMorseValue("...---... --"));
console.log(decodeMorseValue("--"));
// END OF SOLUTION

// QUESTION 7
// write a program that seperates the vowels from consonant and numbers in a given sting
const sepVC = (word) => {
  let vowel = ["a", "e", "i", "o", "u"];
  let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let vowelCollection = "";
  let numCollection = "";
  let consonantCollection = "";

  for (let values of word) {
    if (vowel.includes(values.toLowerCase())) {
      vowelCollection += values;
    } else if (num.includes(values)) {
      numCollection += values;
    } else {
      consonantCollection += values;
    }
  }
  return { vowelCollection, numCollection, consonantCollection };
};

console.log(
  sepVC(
    "jlol689ukj"
  )
);
// END OF SOLUTION
