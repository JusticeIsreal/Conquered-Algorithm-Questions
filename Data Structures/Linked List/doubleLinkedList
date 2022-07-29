class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class doubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to the end of the list
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove from the end of the list
  pop() {
    if (this.length === 0) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
  // remove from the beginning of the list
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // add to the beginning of the list
  unshift(value) {
    let newHead = new Node(value);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.lengt++;
    return this;
  }
  // get Node at particular index
  get(index) {
    if (index >= this.length || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }
}

let doubleLinked = new doubleLinkedList();

doubleLinked.push("1");
doubleLinked.push("2");
doubleLinked.push("3");
doubleLinked.push("4");
// doubleLinked.pop();
// doubleLinked.shift();
doubleLinked.unshift("5");

console.log(doubleLinked.get(3));
console.log(doubleLinked);
