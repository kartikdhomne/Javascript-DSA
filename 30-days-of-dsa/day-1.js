// Que :- Remove Duplicate from array

let arr = [2, 4, 6, 7, 9]; // sorted
let arr1 = [5, 2, 7, 4, 6, 2] //unsorted


// Method 1
const removeDuplicate = (arr) => {
    return [...new Set(arr)]
}
console.log(removeDuplicate(arr))
console.log(removeDuplicate(arr1))

//Method 2
const removeDuplicateM2 = (arr) => {
    let res = arr.filter((item, index) => arr.indexOf(item) === index)
    return res
}
console.log(removeDuplicateM2(arr))
console.log(removeDuplicateM2(arr1))




// ************** Remove Duplicate From Object***************************

let users = [
    { name: "kartik", age: 27 },
    { name: "Pranjali", age: 28 },
    { name: "kartik", age: 28 }
];

const removeObjDuplicate = (users, key) => {
    return [...new Map(users.map(item => [item[key], item])).values()];
};

console.log(removeObjDuplicate(users, "name"));
