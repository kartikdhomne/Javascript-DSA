// Fibonacci Number

// adding previous two numbers results into 3rd number.

// Method 1 :

const fib = function (n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n]
}
const res = fib(4)
console.log(res)

// arr.push -- Push the new value at the end of array.

// Method 2 : Using Recursion

// const fib2 = function (n) {
//     if (n <= 1) return n;

//     return fib2(n - 1) + fib2(n - 2);
// }

// or 

// Arrow Function
const fib2 = (n) => (n <= 1 ? n : fib2(n - 1) + fib2(n - 2))

console.log(fib2(4))
