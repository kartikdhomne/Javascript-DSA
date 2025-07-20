const arr = [1, 2, 3, 4, 5];

let num = 4;

function isPresent(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log(isPresent(arr, num));
