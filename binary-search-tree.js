import {buildTree, Node} from "./node.js";

export class BinarySearchTree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(value) {
    let root = this.root;

    const addValue = function(root, value) {
      if (root === null){
        return new Node(value);
      }
      if (root.value === value) {
        return root;
      } else if (value < root.value) {
        root.left = addValue(root.left, value);
      } else {
        root.right = addValue(root.right, value);
      }
      return root;
    }
    this.root = addValue(this.root, value);
  }

  deleteItem(value) {
    const deleteRecursively = function(root, value) {
      if (root === null) return null;

      if (value < root.value) {
        root.left = deleteRecursively(root.left, value);
      } else if (value > root.value) {
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
          root.value = successorValue;
          root.right = deleteRecursively(root.right, successorValue);
        }
      }

      return root;
    };

    const findMin = function(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node.value;
    };

    this.root = deleteRecursively(this.root, value);
  }

  find(value) {
    let root = this.root;

    const findNode = function(root, value) {
      if (root === null){
        return null;
      }

      if (root.value === value){
        return root;
      } else if (root.value > value){
        return findNode(root.left, value);
      } else {
        return findNode(root.right, value);
      }
    }
    return findNode(this.root, value);
  }

  levelOrder(callback){  //callback can be a function you pass to it, like console.log()
                         //Example: tree.levelOrder(node => console.log(node.value));
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
    if (typeof callback !== "function" ){
      return "Error: Callback function is not correctly defined."
    }
    const visitNode = function(node) {
      if (node === null){
        return;
      }
      if(node.left !== null){
        visitNode(node.left);
      }
      callback(node);
      if (node.right !== null){
        visitNode(node.right);
      }
      return visitNode(node);
    }
    visitNode(this.root)

  }

  preOrder(callback){
    if (this.root === null){
      return null;
    }
    if (typeof callback !== "function" ){
      return "Error: Callback function is not correctly defined."
    }

    const visitNode = function(node) {
      if (node === null){
        return;
      }
      callback(node);
      if(node.left !== null){
        visitNode(node.left);
      }
      if (node.right !== null){
        visitNode(node.right);
      }
      return visitNode(node);
    }
    visitNode(this.root)

  }

  postOrder(callback){
    if (this.root === null){
      return null;
    }
    if (typeof callback !== "function" ){
      return "Error: Callback function is not correctly defined."
    }

    const visitNode = function(node) {
      if (node === null){
        return;
      }
      if(node.left !== null){
        visitNode(node.left);
      }
      if (node.right !== null){
        visitNode(node.right);
      }
      callback(node);
      return visitNode(node);
    }
    visitNode(this.root)

  }

  height(value) {
    if (this.root === null) {
      return null;
    }

    let node = this.find(value);
    let height = 0;

    if (!node) {
      return null;
    } else {
      return this.heightCalculation(node);
    }
  }

  heightCalculation(node){
    if (!node) {
      return -1;
    }
    return 1 + Math.max(this.heightCalculation(node.left), this.heightCalculation(node.right));
  }

  depth(value){
    if (this.root === null){
      return null;
    }
    let currentNode = this.root;
    let depth = 0;


    while (currentNode !== null){
      if (value < currentNode.value){
        depth++;
        currentNode = currentNode.left;
      } else if (value > currentNode.value){
        depth++;
        currentNode = currentNode.right;
      } else {
        return depth;
      }
    }
    return null;
  }

  isBalanced(){
    let node = this.root;
    if (node === null){
      return "There is no tree.";
    }

    let left= this.heightCalculation(node.left) //need to get heights to check if the diff is at most 1
    let right = this.heightCalculation(node.right)

    let leftBalanced = this.isBalanced(left);
    let rightBalanced = this.isBalanced(right);

    if (Math.abs(left - right) <=1 && leftBalanced && rightBalanced){
      return true;
    }
  }

  rebalance(){
    if (this.root === null){
      return "There is no tree to rebalance.";
    }
    if (this.isBalanced()){
      return "Tree is already balanced";
    }
    let array =[];
    let balance = this.isBalanced();

    this.inOrder(node => array.push(node.value));

    if (balance){
      return;
    } else{
      this.root = buildTree(array);
    }
  }


  prettyPrint(node = this.root, prefix = '', isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

}
