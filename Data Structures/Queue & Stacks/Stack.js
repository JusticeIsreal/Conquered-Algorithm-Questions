// STACK (LAST IN FIRST OUT)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // TO LOAD THE TREE
  unShift(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
// TO LOAD THE REMOVE LAST VALUE
  shift() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }


}
const str = "banana";
const stack = new Stack();

function populateStack(str) {
  for (let char of str) {
    stack.unShift(char);
  }
  return stack;
}
console.log(populateStack(str));


// EXAMPLE 1
// Given an array of elements, the task is to sort these elements using a stack.
// This function return the sorted stack
function sortstack(input) {
  let tmpStack = [];
  while (input.length > 0) {
      let tmp = input.pop();
      console.log(tmp)
    while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] > tmp) {
      input.push(tmpStack[tmpStack.length - 1]);
      tmpStack.pop();
    }
    console.log(tmpStack);
      tmpStack.push(tmp);
  }
  return tmpStack;
}

//  testing the function with input
let input = [];
input.push(34);
input.push(3);
input.push(31);
input.push(98);
input.push(92);
input.push(23);

let sort = sortstack(input);

console.log(sort)

// EXAPLE 2
// reverse word function USING STACK;
  const reverseWord = (word) => {
    let stack = [];
    let reversed = "";

    for (let i = 0; i < word.length; i++) {
      stack.push(word[i]);
    }

    for (let i = 0; i < word.length; i++) {
      reversed += stack.pop();
    }

    return reversed;
  };

// testing the reversed word function;
let reversed = reverseWord("hello");
console.log(reversed)



