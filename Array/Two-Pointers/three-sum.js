// Why do we sort the array first in the 3Sum problem?
// We sort the array to efficiently apply the two-pointer technique and to easily skip duplicate values.

// Sorting lets us move pointers based on whether the sum is too small or too large, and it ensures that duplicate triplets appear next to each other, so we can skip them with a simple comparison.

// This reduces the time complexity from O(n³) to O(n²) and ensures that the result set contains only unique triplets.


// function threeSum () {

// }