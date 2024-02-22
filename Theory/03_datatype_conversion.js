//If you try to add two strings, the result will be a string concatenation
let a = 10;
let b = 20;
let c = "30";
let d = "2";
let e = "test";

console.log(a + c); //Output: 1020

consloe.log(a + b + c); //Output: 3030

//Note: The JavaScript interpreter works from left to right.
//First 10 + 20 is added because a and b are both numbers.
//Then 30 + "30" is concatenated because c is a string.

console.log(c + b + a); //Output: 302010

//JavaScript will try to convert strings to numbers in all numeric operations except "+" operator which performs String Concatenation.
console.log(c/d); //Output: 15
console.log(c*d); //Output: 60
console.log(c-d); //Output: 28

//If we are trying to perform arithmetic operation with a non-numeric string, result will be NAN.
console.log(b/e); // Output: NaN
//Note: Here the type of Nan is number.
console.log(typeof NaN); // Output: Number