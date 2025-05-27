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
  }

  deleteItem(value) {
    let root = this.root;
    let data = null;

    const findNode = function(root, value) {
      if(root === null){
        return null;
      }

      if(root.data ===value){
        if (root.left ===null && root.right===null){
          return null;
        } else if (root.left !== null && root.right !== null){
          root.data = successorNode(root, value);
          root.right = findNode(root.right, data);
        } else if (root.left !== null){
          return root.left;
        } else if (root.right !== null){
          return root.right;
        }

      } else if (root.data > value){
        root.left = findNode(root.left, value);
      } else {
        root.right = findNode(root.right, value);
      }
      return root;

    }

    const successorNode = function(root, value) {
      if (root.left ===null){
        return root.data;
      }
      if (root.data > value){
        data = successorNode(root.left, value);
      } else {
        data = successorNode(root.right, value);
      }
      return data;
    }
    return findNode(root, value);
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
        root = findNode(root.right, value);
      } else {
        root =  findNode(root.right, value);
      }
      return root;
    }

    return findNode(root.left, value);

  }

  levelOrder(callback){

  }

  inOrder(callback){

  }

  preOrder(callback){

  }

  postOrder(callback){

  }

  height(value){

  }

  depth(value){

  }

  isBalanced(){

  }

  rebalance(){
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

