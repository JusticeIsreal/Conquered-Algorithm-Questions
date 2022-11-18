const sepVC = (word) => {
  let allVowel = "aeiouAEIOU";
  let number = "0123456789";
  let allVowels = allVowel.split("");
  console.log(allVowels);
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

console.log(sepVC("jlooppa6h1627zewnakllkj"));

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

const cusObj = {
  Ben10: [22, 30, 11, 17, 15, 52, 27, 12, 50],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Tony: [5, 27, 30, 33, 40, 22, 26, 10, 21, 45],
  Linda: [15, 17, 30, 3, 40, 22, 6, 10, 11, 45],
  Zeesham: [22, 30, 11, 5, 17, 30, 6, 57],
};

const qualified = (customers) => {
  let rewardBox = {};
  let message = "";
  for (let customer in customers) {
    // console.log(customers[customer]);
    rewardBox[customer] = customers[customer].filter((el) => el >= 20);
    console.log(rewardBox[customer]);

    if (rewardBox[customer].length >= 5) {
      message += `Congratulations ${customer} you just earned PREMIUM MEMBERSHIP \n`;
    }
  }
  return message;
};
console.log(qualified(cusObj));

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
      total++;
    }
  }
  return total;
}
console.log(countOnline(users));

let usrs = {
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

function truncateString(str, num) {
  let newstr = str.split("").length;
  let newstr1 = str.split("");

  let gg = ["..."];
  if (newstr > num) {
    let answer = newstr1.splice(0, num).join("") + gg;
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

function titleCase(str) {
  let newStr = str.split(" ");
  console.log(newStr);
  let newArr = [];
  for (let i = 0; i < newStr.length; i++) {
    let elem = newStr[i];
    newArr.push(elem[0].toUpperCase() + elem.slice(1).toLowerCase());

    str = newArr.join(" ");
  }
  return str;
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  arr2.splice(n, 0, ...arr1);
  console.log(arr2);
  return arr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// OR
function frankenSplic(arr1, arr2, n) {
  let localArray = arr2;
  console.log(localArray);
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
console.log(frankenSplic([1, 2], ["a", "b"], 1));

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));
//  OR
function bounce(arr) {
  return arr.filter(Boolean);
}
console.log(bounce([7, "ate", "", false, 9]));

function mutatio(arr) {
  let newArr = arr[0].toLowerCase();
  let checkArr = arr[1].toLowerCase();
  if (newArr !== checkArr) {
    return false;
  } else {
    return true;
  }
}
console.log(mutatio(["Mary", "mary"]));

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

const sumZer = (arr) => {
  // use multiple pointer mthod
  // set limit for begin and end of arr
  let left = 0;
  let right = arr.length - 1;
  let newArr = [];

  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(arr[left], arr[right]);
    if (sum === 0) {
      console.log(arr[left], arr[right]);
      return newArr.push(arr[left] + arr[right]);
    } else if (sum > 0) {
      console.log(arr[left], arr[right]);
      right--;
    } else {
      console.log(arr[left], arr[right]);
      left++;
    }
  }
};
console.log(sumZer([-3, -2, -1, 0, 1, 2, 3]));

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log(maxSum);
  }
  //   tempSum = maxSum;
  //   for (let i = num; i < arr.length; i++) {
  //     tempSum = tempSum - arr[i - num] + arr[i];
  //     maxSum = Math.max(maxSum, tempSum);
  //   }
  return maxSum;
}
console.log(maxSubarraySum([2, 3, 6, 5, 7, 1, 2, 3], 5));

// winninCard qustion
const winningCard = ([...arr]) => {
  // declear  arr to concat arguments
  let newArray = [...arr.join(" ,")];
  console.log(newArray);
  let newArr = newArray
    .join("")
    .replace(/[\W_]+/g, "")
    .split("");
  console.log(newArr);
  // declear empty array store final answer
  let finalArr = [];
  //   // declear empty object to collect frequency counter of values
  let freqCounter = {};

  // loop through all values in new array
  for (let i = 0; i < newArr.length; i++) {
    let card = newArr[i];
    console.log(card);
    // carry out codition to store frequency of occurance of values
    if (freqCounter[card]) {
      freqCounter[card] = freqCounter[card] + 1;
    } else {
      freqCounter[card] = 1;
    }
  }
  console.log(freqCounter);

  // loop through new object to get inidividual values
  for (let num in freqCounter) {
    console.log(num)
    //  set condition to pick values  to match task
    if (freqCounter[num] !== 1) {
      console.log(num);
      finalArr.push(num);

      console.log(finalArr);
      return Math.max(...finalArr);
    }
  }
  // return max value
  return -1;
};
console.log(
  winningCard([
    [5, 7, 7, 2],
    [8, 2, 5, 5],
  ])
);

// mixvalue question

const mixValue = (arr1) => {
  let newArray = [];
  console.log(arr1);
  for (let i = 0; i < arr1.length; i++) {
    let elem = arr1[i];
    console.log(elem);
    if (typeof elem === "number") {
      newArray.push(elem);
      console.log(newArray);
      // console.log(newArray);
    }
    console.log(elem);

    console.log(newArray);
  }
};
console.log(mixValue([5, 5, 2, "C", "D", "+"]));


function cardGame(arr) {
  const lenOfArr = arr.length;
  console.log(lenOfArr);
  const uniqueArr = [];

  for (let i = 0; i < lenOfArr; i++) {
    const element = arr[i];
    const len = element.length;
    for (let j = 0; j < len; j++) {
      if (element.lastIndexOf(element[j]) === element.indexOf(element[j])) {
        uniqueArr.push(element[j]);
      }
    }
  }
  return uniqueArr.length > 0 ? Math.max(...uniqueArr) : -1;
}
console.log(
  cardGame([
    [5, 7, 3, 9, 4, 9, 8, 3, 2],
    [1, 2, 2, 4, 4, 1],
    [1, 2, 3],
  ])
);
// console.log(
//   cardGame([
//     [5, 5],
//     [2, 2],
//   ])
// );