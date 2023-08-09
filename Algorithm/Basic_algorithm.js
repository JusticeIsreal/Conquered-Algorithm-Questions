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

console.log(sepVC("jlol689ukj"));
// END OF SOLUTION

// Questionn 8
//  An atm has 100, 20, 9, and 1 Naira bills (NGN) available to be dispensed.
//     Given an amount between 0 and 10,000 Naira (inclusive) and asaiming that the
// ATM wants to use as few bills as possible,
//     determine  the minimal number of 100, 20, 9, and 1 dollar bills the ATM needs
// to dispense(in that order).
//     Here's the specification for the withdraw method you'll complete.

//  Withdraw  (amount)

// Parameters
// Amount: Number - amount of money to withdraw. Assume that the amount is always
// divisible into 100, 20, 9, and 1 bills.
// Return value
// Array  <Number> An array of 4 integers representing the number of 100, 20, 9, and 1 Naira
// bills needed to complete the withdraw(in that order).Constraints: 0《amount《10,000.
// Examples
// Amount         return value
// 1049              [10,2,1,0]
// 130                [1,1,1,1]

// ANSWER
// Idrew a function
const atmMachine = (amountRequested) => {
  //amountRequested / 100
  let hunderdRemainder = amountRequested % 100;
  let hundreds = (amountRequested - hunderdRemainder) / 100;
  let twentys = 0;
  let nines = 0;
  let ones = 0;

  if (hunderdRemainder) {
    let twentyRemainder = hunderdRemainder % 20;
    twentys = Math.floor(hunderdRemainder / 20);

    if (twentyRemainder) {
      let ninesRemainder = twentyRemainder % 9;
      nines = Math.floor(twentyRemainder / 9);
      if (ninesRemainder) {
        ones = ninesRemainder;
      }
    }
    console.log(nines);
  }

  return [hundreds, twentys, nines, ones];

  //there's a remainder / 20
  // dive  by 9
  // divide by 1
};

console.log(atmMachine(10409));

// QUESTION 10
// We have an oject of customers for our food delivery
// app with th information about their past order with order value.
// write a javascript program to give a "PREMIUM MEMBERSHIP" to the
// customer is the customer has made at least 5 order of the minimum value of 20.
// the customers and their past order history is given below

const cusObj = {
  Ben10: [22, 30, 11, 17, 15, 52, 27, 12, 50],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Tony: [5, 27, 30, 33, 40, 22, 26, 10, 21, 45],
  Linda: [15, 17, 30, 3, 40, 22, 6, 10, 11, 45],
  Zeesham: [22, 30, 11, 5, 17, 30, 6, 57],
};

const qualified = (customers) => {
  let premiumCustomers = [];
  //loopthrought the keys int the obj
  const objKeys = Object.keys(customers);

  objKeys.forEach((element) => {
    // loop through
    let premiumCount = 0;
    let details = customers[element];

    //loop through details
    details.forEach((key) => {
      if (key >= 20) premiumCount += 1;
    });

    if (premiumCount >= 5) {
      premiumCustomers.push(element);
    }
  });

  return `your premium customers are : ${premiumCustomers}`;
};
console.log(qualified(cusObj));
// END OF SOLUTION

//  QUESTION 11

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

// a function to check character duplicates
function isDuplicate(word) {
  let wordArray = word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray.filter((item) => item === wordArray[i]).length > 1) {
      return true;
    }
  }

  return false;
}

// is charcters in word
function isInWord(inputChar, actualChar) {
  if (!inputChar) return false;
  for (let i = 0; i < inputChar.length; i++) {
    if (!actualChar.includes(inputChar[i])) {
      return false;
    }
  }
  return true;
}

function switchChar(inputChar = "", actualChar = "", changeChar = "") {
  let result;
  if (actualChar.length === changeChar.length) {
    return result;
  }

  if (!isDuplicate(actualChar)) {
    return result;
  }

  if (inputChar.length < actualChar) {
    return result;
  }

  if (isInWord(inputChar, actualChar)) {
    return result;
  }
}

switchChar("we", "wkeap", "mgren");
// END OF SOLUTION

var users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: true,
  },
  rah: {
    online: true,
  },
};

const onlineUsers = (usersObj) => {
  let usersCount = 0;

  for (let onlineStatus in usersObj) {
    console.log(usersObj[onlineStatus]);
    if (usersObj[onlineStatus].online === true) {
      usersCount++;
    }
  }

  return usersCount;
};

console.log(onlineUsers(users));
