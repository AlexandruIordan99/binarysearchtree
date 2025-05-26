import {buildTree, Node} from "./node.js";

class binarySearchTree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(value) {

  }

  deleteItem(value) {

  }

  find(value) {

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

