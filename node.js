import {mergeSort} from "./merge-sort.js";

export class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function buildTree(arr){
  let array = removeDuplicates(arr);
  let sortedArr = sortArray(array);
  return buildSearchTree(sortedArr, 0, sortedArr.length - 1);
}

function removeDuplicates(arr){
  let arraySet= new Set(arr);
  return Array.from(arraySet);
}

function sortArray(arr){
  return mergeSort(arr);
}

function buildSearchTree(sortedArr, start, end){
  if (start > end) {
    return null;
  }

  const middle= Math.floor((end + start) / 2);

  const root =  new Node(sortedArr[middle]);
  root.leftChild = buildTree(sortedArr, start, middle -1);
  root.rightChild = buildTree(sortedArr, middle + 1, end);
  return root;

}

module.exports = {Node};