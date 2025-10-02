// Check Plaindrome

// Palindrome Number reads same from both side eg. 121

const isPalindrome = (x) => {
    return x === +x.toString().split("").reverse().join("");
}
const res = isPalindrome(10)
console.log(res)

// toString -- Convert into string; eg 121 => "121"
// split -- split array or string ; eg 121=>["1","2", "1"]
//reverse -- reverse array; eg. 10 => 01
// adding + before string will convert string into number only in case of string having number value in it.