export function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end){
    return;
  }

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  mergeSort(arr, start, middle);
  mergeSort(arr, middle+1, end);
  merge(arr, start,middle, end);

}

function merge(arr, start, middle, end) {
  const left = arr.slice(start, middle +1);
  const right = arr.slice(middle +1, end+1);
  let i = 0;
  let j = 0;
  let k= start;

  while (i <left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else if (left[i] > right[j]) {
      arr[k] = right[j];
      j++
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] =right[j];
    j++;
    k++;
  }
}

