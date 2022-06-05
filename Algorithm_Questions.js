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
  let newarr2 = [min2, max2];

  // log  value
  // console.log(newarr2);
  return newarr2;
};
console.log(answer2([2, 5, 7, 8, 9]));

// END OF SOLUTION

// QUESSION 2
//  write aprogram the remove negative or non integer from and arry and return the sum of only positive integer

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

// wrote a javaScript function to remove the punctuations from the alphabets
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
