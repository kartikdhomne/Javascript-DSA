//Find maximum element in array

const arr = [1, 2, 3, 41, 5, 6];

function maxElement(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxElement(arr));
