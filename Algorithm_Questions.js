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
// write a program to return an array secon smallers value and second largest value..   arr2=[2,5,7,8,9] answer =[5,8]

// given array

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
  let newarr2 = newarr.push(min2, max2);

  // log  value
  // console.log(newarr2);
  return newarr2;
};
console.log(answer2([2, 5, 7, 8, 9]));

// END OF SOLUTION

// QUESSION 2
//  write a program that remove negative or non integer from and arry and return the sum of only positive integer

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

// Wrote a javaScript function to Seperate smaller case from upper case in the string below
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
    // set a condition for the seperate the letters using ther charCodeAt values
    if (arr.charCodeAt(i) >= 97 && arr.charCodeAt(i) <= 122) {
      // all small letters accoding to the charCodeAt vlaue is stored in result
      result += arr.charAt(i);
    } else {
      // not small letters is stored in upper value
      upper += arr.charAt(i);
    }
  }
  return { lower: result, uppercase: upper };
}
console.log(onlyLowest(message));

// write a javaScript function to remove the punctuations from the alphabets
//remove puntuation from the string
// given string
let letter = "This is, what i: love? most!";
function removepuntuation(str) {
  // set variable to store answer
  let sen = "";
  // loop through the string values
  for (let i = 0; i < str.length; i++) {
    // set conditions to seperate puntuation fron string using their charCodeAt values

    if (
      str.charCodeAt(i) === 46 ||
      str.charCodeAt(i) === 63 ||
      str.charCodeAt(i) === 44 ||
      str.charCodeAt(i) === 58 ||
      str.charCodeAt(i) === 59 ||
      str.charCodeAt(i) === 33 ||
      str.charCodeAt(i) === 34
    ) {
      continue;
    } else {
      sen += str.charAt(i);
    }
  }
  return sen;
}

console.log(removepuntuation(letter));
console.log(removepuntuation("love ?!,good"));

// Question 4
//     The Morse code encodes every character as a sequence of "dots" and "dashes".

//     For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−.

//     The Morse code is case-insensitive, traditionally capital letters are used.
//     When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.

//     For example, the message `Decadev` in Morse code is -.. . -.-. .- -.. . ...-

//     NOTE: Extra spaces before or after the code have no meaning and should be ignored. In addition to letters, digits and some punctuation,
//     there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···.
//     These special codes are treated as single special characters, and usually are transmitted as separate words.
//     Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

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
  // to convert string to array
  const splitMorseCode = morseCode.split(" ");

  // a variable to hold each character
  let readableStringValue = "";
  // loop through new array
  for (let i = 0; i < splitMorseCode.length; i++) {
    let elem = splitMorseCode[i];
    // set condition to check object
    if (MORSE_CODE.hasOwnProperty(elem)) {
      // add found value to empty string
      readableStringValue += MORSE_CODE[elem];
    }
  }
  return readableStringValue;
};

console.log(decodeMorseValue("...---..."));
console.log(decodeMorseValue("--"));

// QUESTION 5
// write a program that seperates the vowels from consonant and numbers in a given sting
const sepVC = (word) => {
  let allVowel = "a, e, i, o, u, A, E, I, O, U";
  let number = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
  let allVowels = allVowel.split("");
  let numbers = number.split("");
  // set a variable to store new values

  let vowels = "";
  let consonant = "";
  let num = "";
  for (let i = 0; i < word.length; i++) {
    let elem = word[i];
    if (allVowels.includes(elem)) {
      vowels += elem;
    } else if (numbers.includes(elem)) {
      num += elem;
    } else if (!allVowels.includes(elem)) {
      consonant += elem;
    }
  }
  return { vowel: vowels, consonant: consonant, number: num };
};

console.log(
  sepVC(
    "jlooppa62467244724eiugxdhahah1627zdgasgdgaegdgdsfs7367824671ncjhfijhvmt774vnakllkj"
  )
);

// Questionn 5
//  An atm has 100, 20, 9, and 1 Naira bills (NGN) available to be dispensed.
//     Given an amount between 0 and 10,000 Naira (inclusive) and asaiming that the ATM wants to use as few bills as possible,
//     determine  the minimal number of 100, 20, 9, and 1 dollar bills the ATM needs to dispense (in that order).
//     Here's the specification for the withdraw method you'll complete.

//  Withdraw  (amount)

// Parameters
// Amount: Number - amount of money to withdraw. Assume that the amount is always divisible into 100, 20, 9, and 1 bills.
// Return value
// Array  <Number> An array of 4 integers representing the number of 100, 20, 9, and 1 Naira bills needed to complete the withdraw  (in that order). Constraints: 0《amount《10,000.
// Examples
// Amount         return value
// 1049              [10,2,1,0]
// 130                [1,1,1,1]

// ANSWER
// Idrew a function
const atmMachine = (amountRequested) => {
  if (amountRequested > 20000) {
    console.log("you can only withdraw $10,000 at a time");
    return false;
  } else {
    // set array of cash avalible in the machine
    let cashAvaliable = [100, 20, 9, 1];
    // set variable for an empty array to store output denominations
    let moneyDenominations = [];
    // calculated for first denomination using the avaliable denomination of 100 dollar bill in the machine
    let denomination1 = Math.floor(amountRequested / cashAvaliable[0]);
    // calculated for first denomination using the avaliable denomination of 20 dollar bill in the machine
    let denomination2 = Math.floor(
      (amountRequested % cashAvaliable[0]) / cashAvaliable[1]
    );
    // calculated for first denomination using the avaliable denomination of 9 dollar bill in the machine
    let denomination3 = Math.floor(
      ((amountRequested % cashAvaliable[0]) % cashAvaliable[1]) /
        cashAvaliable[2]
    );
    // calculated for first denomination using the avaliable denomination of 1 dollar bill in the machine
    let denomination4 = Math.floor(
      ((amountRequested % cashAvaliable[0]) % cashAvaliable[1]) %
        cashAvaliable[2]
    );
    // inputed values to the initials empty array
    // moneyDenominations  = [
    //   {
    //     $100: denomination1,
    //     $20: denomination2,
    //     $9: denomination3,
    //     $1: denomination4,
    //   },
    // ];
    moneyDenominations.push({
      $100: denomination1,
      $20: denomination2,
      $9: denomination3,
      $1: denomination4,
    });
    return moneyDenominations;
  }
};
console.log(atmMachine([10409]));
atmMachine();

// altlernative solution
const withdraw = (amount, oldArray = []) => {
  box = [...oldArray];
  let num;
  if (Math.floor(amount / 100) > 0) {
    let remainder = Math.floor(amount / 100);
    box.push(remainder);
    num = amount - remainder * 100;
    withdraw(num, box);
  } else if (Math.floor(amount / 20) > 0) {
    let remainder = Math.floor(amount / 20);
    box.push(remainder);
    num = amount - remainder * 20;
    withdraw(num, box);
  } else if (Math.floor(amount / 9) > 0) {
    let remainder = Math.floor(amount / 9);
    box.push(remainder);
    num = amount - remainder * 9;
    withdraw(num, box);
  } else if (amount < 9) {
    box.push(amount);
  }
  return box;
};
console.log(withdraw(10409));

// QUESTION 6
// write a program that returns  the longest word from the given string
const longestWord = (sentences) => {
  let sentence = sentences.split(" ");
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    let elem = sentence[i];
    if (elem.length > word.length) {
      word = elem;
    }
  }
  return word;
};

console.log(longestWord("hello guys this is justice isreal code"));
console.log(longestWord("hello this is another testing for verification"));

// QUESTION 7
// We have an oject of customers for our food delivery
// app with th information about their past order with oder value.
// write a javascript program to give a "PREMIUM MEMBERSHIP" to the
// customer is the customer has made at least 5 order of the minimum value of 20.
// the customers and their past order history is given below

const obj = {
  Ben10: [22, 30, 11, 17, 15, 52, 27, 12, 50],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Tony: [5, 27, 30, 33, 40, 22, 26, 10, 21, 45],
  Linda: [15, 17, 30, 3, 40, 22, 6, 10, 11, 45],
  Zeesham: [22, 30, 11, 5, 17, 30, 6, 57],
};

const qualifiedCustomer = (customers) => {
  let rewardBox = {};
  let message = "";
  for (let customer in customers) {
    rewardBox[customer] = obj[customer].filter((el) => el >= 20);

    if (rewardBox[customer].length >= 5) {
      message += `Congratulations ${customer} you just earned PREMIUM MEMBERSHIP \n`;
    }
  }
  return message;
};
console.log(qualifiedCustomer(obj));

//  QUESTION 9

//  *switchChar* is a function that helps children in swapping values to return a new word
// a word is a set of alphabets that obviously must not be a dictionary word

// the children are offered three inputs:

// inputChar: cade
// actualChar: abcdefgh  (is a set of non-repeating alpha-characters)
// changeChar: grdwqsdr

// switchChar(inputChar, actualChar, changeChar) => dgwq

// the result for this is => "dgwq"

// you are to write a function that takes these values as arguments and return the result only if:

// 1) actualChar and changeChar are of the same length,
// 2) characters in actualChar are not repeated,
// 3) the length of inputChar is not longer than the length of actualChar
// 4) the characters in inputChar are contained in actualChar

// if none of this conditions are met, here are the returned values

// 1) actualChar and changeChar are not the same length returns => "Length mismatch"
// 2) characters in actualChar are repeated returns => 'Repeated value'
// 3) the length of inputChar is longer than the length of actualChar returns => -1
// 4) the characters in inputChar are not contained in actualChar -1

// *NOTE:*
// actualChar is a set of none repeating characters of length (0 to N)
// inputChar is a set of characters of length (0 to N-1)
// changeChar is a set of characters of length (length of actualChar)
// unmet conditions must return values

// examples:
// *switchChar('decagon', 'lmnbvcxzasdfghjktyrueiwoqp', 'zdewsaqxcfrtgvbhyujnmkilop') => "rmacgle*
// *switchChar('we', 'wkeap', 'mgren')​​​ => "mr"*

function switchChar(inputChar = "", actualChar = "", changeChar = "") {
  let res = "";
  //check for conditions and constraints
  if (actualChar.length != changeChar.length) {
    return "Length mismatch";
  }
  if (actualChar.length > 1 && dup(actualChar)) {
    return "Repeated value";
  }
  if (inputChar.length > actualChar.length || !actualChar.contains(inputChar)) {
    return -1;
  }
  //swap the values
  for (let i = 0; i < inputChar.length; i++) {
    let index = actualChar.indexOf(inputChar[i]);
    // console.log(index);
    res += changeChar[index];
    console.log(res);
  }
  return res;
}
//create custom contains for string properties
String.prototype.contains = function (str = "") {
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (!this.includes(el)) {
      return false;
    }
  }
  return true;
};

//checks for duplicate
function dup(str = "") {
  const arr = [...new Set(str.split(""))];
  return !(arr.length == str.length);
}

// console.log(switchChar("decagon", "lmnbvcxzasdfghjktyrueiwoqp", "zdewsaqxcfrtgvbhyujnmkilop"));
// console.log(switchChar("we", "wkeap", "mgren"));
switchChar("we", "wkeap", "mgren");

// QUESTION 10 .

// Change the 0 so that product will equal 80.
// const product = 8 * 0;

const product = 8 * 10;
console.log(product);
