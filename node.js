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
  mergeSort(array);
  return buildSearchTree(array, 0, array.length - 1);
}

function removeDuplicates(arr){
  let arraySet= new Set(arr);
  return Array.from(arraySet);
}


function buildSearchTree(sortedArr, start, end){
  if (start > end) {
    return null;
  }

  const middle= Math.floor((end + start) / 2);

  const root =  new Node(sortedArr[middle]);
  root.left = buildSearchTree(sortedArr, start, middle -1);
  root.right = buildSearchTree(sortedArr, middle + 1, end);
  return root;

}

