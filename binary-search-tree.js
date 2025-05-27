import {buildTree, Node} from "./node.js";

class binarySearchTree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(value) {
    let root = this.root;

    const addValue = function(root, value) {
      if (root === null){
        return new Node(value);
      }
      if (root === value) {
        return root;
      } else if (value < root.data) {
        root.left = addValue(root.left, value);
      } else {
        root.right = addValue(root.right, value);
      }
      return addValue(value);
    }
    this.root = addValue(this.root, value);
  }

  deleteItem(value) {
    const deleteRecursively = function(root, value) {
      if (root === null) return null;

      if (value < root.data) {
        root.left = deleteRecursively(root.left, value);
      } else if (value > root.data) {
        root.right = deleteRecursively(root.right, value);
      } else {
        if (root.left === null && root.right === null) {
          return null;
        } else if (root.left === null) {
          return root.right;
        } else if (root.right === null) {
          return root.left;
        } else {
          let successorValue = findMin(root.right);
          root.data = successorValue;
          root.right = deleteRecursively(root.right, successorValue);
        }
      }

      return root;
    };

    const findMin = function(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node.data;
    };

    this.root = deleteRecursively(this.root, value);
  }

  find(value) {
    let root = this.root;

    const findNode = function(root, value) {
      if (root === null){
        return null;
      }

      if (root.data === value){
        return root;
      } else if (root.data > value){
        return findNode(root.left, value);
      } else {
        return findNode(root.right, value);
      }
    }
    return findNode(this.root, value);
  }

  levelOrder(callback){  //callback can be a function you pass to it, like console.log()
                         //Example: tree.levelOrder(node => console.log(node.data));
    if (callback === null){
      return "Error: Callback function is not defined."
    }

    if (!this.root) return;
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift(); //dequeue parent node
      callback(node); // Apply callback to current node

      if (node.left !== null) queue.push(node.left); //enqueue child nodes
      if (node.right !== null) queue.push(node.right);

      }
    }


  inOrder(callback){
    if (this.root === null){
      return null;
    }
    if (callback === null){
      return "Error: Callback function is not defined."
    }

  }

  preOrder(callback){
    if (this.root === null){
      return null;
    }
    if (callback === null){
      return "Error: Callback function is not defined."
    }
  }

  postOrder(callback){
    if (this.root === null){
      return null;
    }
    if (callback === null){
      return "Error: Callback function is not defined."
    }
  }

  height(value){
    if (this.root === null){
      return null;
    }
  }

  depth(value){
    if (this.root === null){
      return null;
    }

  }

  isBalanced(){
    if (this.root === null){
      return "There is no tree.";
    }

  }

  rebalance(){
    if (this.root === null){
      return "There is no tree to rebalance.";
    }
    if (this.isBalanced()){
      return "Tree is already balanced";
    }

  }


  prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

}

