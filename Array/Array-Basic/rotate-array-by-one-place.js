const arr = [1, 2, 3, 4, 5];

function rightRotateByOne(arr) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}

console.log(rightRotateByOne(arr));

function leftRotateByOne(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}

console.log(leftRotateByOne(arr));
