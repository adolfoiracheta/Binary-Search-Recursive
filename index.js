//binary search: dividing the array in half until we find the target
//utilize the midpoit min & max

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = 0;
let max = array.length - 1;
let target = 3;

function binarySearch(array, target, min, max) {
  if (min > max) {
    return false;
  }
  
  let mid = Math.floor((min + max) / 2);
  if (array[mid] == target) {
    return true;
  
  } else if (array[mid] > target) {
    return binarySearch(array, target, min, mid - 1);
  
  } else if (array[mid] < target) {
    return binarySearch(array, target, mid + 1, max);
  }
}
console.log(binarySearch(array, target, min, max));
