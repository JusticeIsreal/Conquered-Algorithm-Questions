// QUEUE (FIRST IN FIRST OUT)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
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

let QueueNode = new Queue();

QueueNode.enqueue(7);

console.log(QueueNode);



// Given a Queue Q containing N elements. The task is to reverse the Queue.
// Your task is to complete the function rev(),
// that reverses the N elements of the queue.

const rev = (queue) => {
  const lenOfQueue = queue.length;
  const reversedQueue = [];
  for (let i = 0; i < lenOfQueue; i++) {
    reversedQueue.unshift(queue.shift());
  }
  return reversedQueue;
};
const queue = [1, 2, 3, 4, 5];
console.log(rev(queue));