// Fibonacci Number

// adding previous two numbers results into 3rd number.

// Method 1 :

const fib = function (n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[5]
}
fib(5)

// arr.push -- Push the new value at the end of array.

// Method 2 : Using Recursion