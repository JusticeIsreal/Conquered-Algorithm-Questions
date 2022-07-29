class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // add value to tree
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // to find avaliable
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // to see if a true contains  a value
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Breath first search
  BreathFirstSearch() {
    let data = [];
    let picker = [];
    let current = this.root;
    picker.push(current);
    while (picker.length) {
      current = picker.shift();
      data.push(current.value);
      if (current.left) picker.push(current.left);
      if (current.right) picker.push(current.right);
    }
    console.log(data);
    return data;
  }
  // Deph first search PREORDER
  // (starts from the root and takes all the value in the left and then go to all the value in the right of the root)
  DFSPreOrder() {
    let data = [];
    function traverse(current) {
      data.push(current.value);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    console.log(data);
    return data;
  }
  // Deph first search PREORDER
  // (start from the bottom most left side of the root and takes all the value and then go to all the value in the rbootom most right side of the root)
  DFSPostOrder() {
    let data = [];
    function transverse(current) {
      if (current.left) transverse(current.left);
      if (current.right) transverse(current.right);
      data.push(current.value);
    }
    transverse(this.root);
    console.log(data)
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.BreathFirstSearch());
