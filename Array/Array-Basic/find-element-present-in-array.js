/**
 * 🔍 Check if an element is present in an array
 * Multiple methods: loop, indexOf, includes, findIndex, binary search
 */

const arr = [1, 2, 3, 4, 5];
const num = 4;

// ✅ 1. Using For Loop (Manual Check)
function isPresentLoop(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i; // Return index if found
        }
    }
    return -1; // Not found
}
console.log("Using for loop:", isPresentLoop(arr, num)); // Output: 3

// ✅ 2. Using indexOf
function isPresentIndexOf(arr, num) {
    return arr.indexOf(num); // Returns index or -1
}
console.log("Using indexOf:", isPresentIndexOf(arr, num)); // Output: 3

// ✅ 3. Using includes
function isPresentIncludes(arr, num) {
    return arr.includes(num); // Returns true/false
}
console.log("Using includes:", isPresentIncludes(arr, num)); // Output: true

// ✅ 4. Using findIndex
function isPresentFindIndex(arr, num) {
    return arr.findIndex(el => el === num); // Returns index or -1
}
console.log("Using findIndex:", isPresentFindIndex(arr, num)); // Output: 3

// ✅ 5. Using Binary Search (Only for sorted arrays)
function isPresentBinarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) return mid;
        else if (arr[mid] < num) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log("Using binary search:", isPresentBinarySearch(arr, num)); // Output: 3

/**
 * ✅ Summary:
 * - indexOf / findIndex → returns index or -1
 * - includes → returns true/false
 * - binary search → only if array is sorted
 */
