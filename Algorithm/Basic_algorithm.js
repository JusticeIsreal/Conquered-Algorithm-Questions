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
// Write a javaScript function to Seperate smaller case from upper case in the string below
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
