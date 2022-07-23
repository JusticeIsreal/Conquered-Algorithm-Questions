// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
//   // to add to the end of the list
//   push(value) {
//     if (!this.head) {
//       let newHead = new Node(value, this.head);
//       this.length++;
//       newHead = this.head;
//       return;
//     }

//     let lastNode = this.head;
//     if (lastNode && lastNode.next) {
//       lastNode = lastNode.next;
//       return lastNode;
//     }
//     lastNode = new Node(value, null);
//     this.length++;
//   }
//   // to remove the last Node of the list
//   pop() {
//     // set a condition to stop operation incase of empty list
//     if (!this.head) return "IT'S EMPTY";

//     let lastNode = this.head;
//     if (lastNode && lastNode.next) {
//       lastNode = lastNode.next;
//       return lastNode;
//     }

//     let current = this.head;
//     while (current.next !== lastNode) {
//       current = current.next;
//     }
//     current.next = null;
//     this.length = 0;
//   }

//   //to insert data from front of the list
//   unshift(value) {
//     let newHead = new Node(value, this.head);
//     this.length++;
//     newHead = this.head;
//   }
//   // to remove the first Node
//   shift() {
//     if (!this.head) {
//       return;
//     }
//     let firstNode = this.head;
//     this.head = this.head.next;
//     this.length--;
//     return firstNode;
//   }

//   // to get first value
//   getHead() {
//     return this.head;
//   }
//   // get the last node on the linked list
//   getLast() {
//     let lastNode = this.head;
//     while (lastNode && lastNode.next) {
//       lastNode = lastNode.next;
//     }
//     return lastNode;
//   }
//   // to clear all Nodes
//   clear() {
//     this.head = 0;
//     this.length = 0;
//   }
//   // to get a Node at a given index
//   get(index) {
//     if (value >= this.head || index < 0) {
//       return null;
//     }
//     let counter = 0;
//     let current = this.head;
//     while (index < counter) {
//       current = current.next
//        counter++;
//     }
//     return current;
//   }
//   // to insert data at any index of the list

//   set(index, value) {
//     if (!this.get(index)) {
//       return false;
//     }
//     const node = this.get(index);
//     node.data = value;
//     return true;
//   }
//   // to remove a certain Node at an index
//   remove(index) {
//     if (!this.get(index)) {
//       return false;
//     }
//     if (index === 0) {
//       return this.shift();
//     }
//     const prevNode = this.get(index - 1);
//     const nodeToRemove = this.get(index);

//     prevNode.next = prevNode.next.next;
//     this.length--;
//     return nodeToRemove;
//   }
//   // to insert node and specific index
//   insert(index, value) {
//     if (index > this.length || index < 0) {
//       return false;
//     }
//     if (index === 0) {
//       this.unshift(value);
//       return true;
//     }
//     const prevNode = this.get(index - 1);
//     const nextNode = this.get(index);

//     prevNode.next = new Node(value, nextNode);
//     this.length++;
//     return true;
//   }
// }
// let list = new LinkedList();
// // console.log(list);
// list.push("this");
// list.push("huhu");
// list.push("this");

// console.log(list);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singleLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // /add to the end of a linked list O(1)
  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove from the end of a linked list 0(1) or o(n)
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    // console.log(current);
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // to remove the first Node 0(1) or o(n)
  shift() {
    if (!this.head) {
      return;
    }
    let firstNode = this.head;
    this.head = this.head.next;
    this.length--;
    // console.log(firstNode)
    return firstNode;
  }
  // add to the beginning of the list O(1)
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // to print all value
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  // to get value at specific index o(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // to set new value at specific index  o(n)
  set(index, value) {
    let newValue = this.get(index);
    if (newValue) {
      newValue.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (this.length === 0) return this.unshift(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index);
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (this.length === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

var singleList = new singleLinkedlist();
singleList.push("yes");
singleList.push("no");
singleList.push(6);
singleList.insert(2, 789);
// singleList.insert(4, 78);
// console.log(singleList.get(1));
// singleList.shift();
// singleList.pop();
// singleList.unshift("hgjhghjg");
singleList.traverse();
// singleList.reverse()
console.log(singleList);

// let arr = [4, 5, 3, 1, 7, 8, 3];
// for (let i = 0; i < arr.length; i++) {
//   let elem = arr[i];
//   singleList.unshift(elem);
//   singleList.insert(1, 78);
//   console.log(singleList);
//   console.log(i);
// }
