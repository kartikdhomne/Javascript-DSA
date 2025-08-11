// Find maximum element in array - Multiple Methods

const arr = [1, 2, 3, 41, 5, 6];

// -------------------- Method 1: Using Loop --------------------
function maxElementLoop(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Max (Loop):", maxElementLoop(arr));

// -------------------- Method 2: Using Math.max + Spread --------------------
function maxElementMath(arr) {
    return Math.max(...arr);
}
console.log("Max (Math.max):", maxElementMath(arr));

// -------------------- Method 3: Using reduce() --------------------
function maxElementReduce(arr) {
    return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
}
console.log("Max (Reduce):", maxElementReduce(arr));

// -------------------- Method 4: Using sort() --------------------
function maxElementSort(arr) {
    let sorted = [...arr].sort((a, b) => b - a);
    return sorted[0];
}
console.log("Max (Sort):", maxElementSort(arr));
