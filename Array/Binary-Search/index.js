// It work on principal of either ascending order or descending order

// ## For Sorted Array

// ## First find the mid element from array.
// ## Then will check mid element is equals to target or not
// ## Now, if my target element is less than mid element value then ignore right part after mid element as array is already sorted and no need to find target at right.
// ## Now, if my target element is greater than mid element value then ignore left part before mid element as array is already sorted and no need to find target at left.
// ## Move index before and after mid based on need
// ## also again repeat same procedure for find mid from remaining array and so on

//🟢Search Insert Position🔴

let arr = [1, 4, 6, 7, 9, 19, 57, 84, 99];

function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) last = mid - 1;
    else first = mid + 1;
  }

  return -1; // not found
}

console.log(binarySearch(arr, 100));
