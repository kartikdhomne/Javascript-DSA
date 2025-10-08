const arr = [4, 1, 3, 2, 5, 6];

target = 9;

function TwoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complememt = target - arr[i];

    if (map.has(complememt)) {
      return [map.get(complememt), i];
    }

    map.set(arr[i], i);
  }
}

console.log(TwoSum(arr, 11));
