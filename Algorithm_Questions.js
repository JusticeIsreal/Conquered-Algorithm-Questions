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

// We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

// {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

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
};

function countOnline(usersObj) {
  let total = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      console.log(usersObj[user].online);
      //code
      total++;
    }
  }
  return total;
}

console.log(countOnline(users));

// QUESTION 11
// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  let total = Object.keys(obj);

  return total;
}

console.log(getArrayOfUsers(users));

// QUESTION 12
// Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  console.log(user.data.friends);
  let newArr = userObj.data.friends;
  newArr.push(friend);
  return newArr;
}

console.log(addFriend(user, "Pete"));

// QUESTION 13
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertToF(30));

// QUESTION 14

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// QUESTION 15

// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("He has to give me a new name", "name"));

// QUESTION 16

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }
  return accumulatedStr;
}
console.log(repeatStringNumTimes("abc", 3));

// QUESTION 17

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending

function truncateString(str, num) {
  let newstr = str.split("").length;
  let newstr1 = str.split("");

  console.log(num);
  let gg = ["..."];
  if (newstr > num) {
    let answer = newstr1.splice(0, num).join("") + "...";
    console.log(answer);
    return answer;
  } else {
    return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);

// QUESTION 18

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// QUESTION 18

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}
console.log(booWho(1));

// QUESTION 18

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let newStr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < newStr.length; i++) {
    let elem = newStr[i];
    newArr.push(elem[0].toUpperCase() + elem.slice(1).toLowerCase());
    str = newArr.join(" ");
  }
  return str;
}
console.log();
titleCase("I'm a little tea pot");

// QUESTION 19

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  arr2.splice(n, 0, ...arr1);
  console.log(arr2);
  return arr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//  OR

function frankenSplic(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
console.log(frankenSplic([1, 2], ["a", "b"], 1));

// QUESTION 20

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  console.log(newArray);
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));

//  OR
function bounce(arr) {
  return arr.filter(Boolean);
}
console.log(bounce([7, "ate", "", false, 9]));

// QUESTION 21

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((x, y) => x - y);
  let hh = arr.indexOf(num);
  return hh;
}
console.log(getIndexToIns([40, 80, 60], 50));
console.log(getIndexToIns([2, 20, 10], 19));


// QUESTION 22

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
console.log(mutation(["Mary", "Army"]));
//  OR
function mutatio(arr) {
  let newArr = arr[0].toLowerCase();
  let checkArr = arr[1].toLowerCase();
  if (!newArr.includes(checkArr)) {
    return false;
  } else {
    return true;
  }
}
console.log(mutatio(["Mary", "Army"]));


// QUESTION 23

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
;