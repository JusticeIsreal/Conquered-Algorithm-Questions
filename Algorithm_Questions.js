// QUESTION 1
// write a program to add only positive integers in an array and return the sum.

// given array
let arr1 = [1, 5, -6, 20, -5, 10, -8];

const answer = () => {
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
console.log(answer());
// END OF SOLUTION

// QUESTION 2
// write a program to return an array secon smallers value and second largest value..   arr2=[2,5,7,8,9] answer =[5,8]

// given array
let arr2 = [2, 5, 10, 25, 7, 8, 9];
const answer2 = () => {
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
console.log(answer2());

// END OF SOLUTION

// QUESSION 2
//  write aprogram the remove negative or non integer from and arry and return the sum of only positive integer

let arr = [3, "6", 9, "5", 2];
function sumonlynumber() {
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
console.log(sumonlynumber());
