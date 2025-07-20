const arr = [1, 1, 0, 0, 1, 1, 1, 0];

function maxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++; // we found a 1, increase the count
            maxCount = Math.max(maxCount, currentCount); // update maxCount if needed
        } else {
            currentCount = 0; // reset count when a 0 is found
        }
    }
    return maxCount;
}

console.log(maxConsecutiveOnes(arr));
