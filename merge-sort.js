export function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right=mergeSort(arr.slice(middle, arr.length));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i <left.length && j < right.length) {
    if(left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else if (left[i] > right[j]) {
      merged.push(right[j]);
      j++;
    }
  }

  merged.push(...left.slice(i));
  merged.push(...right.slice(j));

  return merged;

}

