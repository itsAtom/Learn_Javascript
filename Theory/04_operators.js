//There are total 8 different types of operators in Javascript.

//1. Arithmetic
// Use to perform basic mathematical operations, i.e., +, -, *, /, %, ++, --
let a = 10
console.log(a++)    // Post-Increment: returns the value before incrementing it 
// In this case output will be 10 as it return 10 and then increase by one making it 11

console.log(++a)   // Pre-increment: returns the value after incrementing it
// In this case output will be 11 as it first increase by one making it  11 and then return that value

let b = 5
console.log(b--)     //Post-Decrement: returns the value before decreasing it
// In this case output will be 5 as it return 5 and then decrease by one making it 4

console.log(--b)    // Pre-Decrement: returns the value after decreasing it
// In this case output is 4 as it first decrease by one making it 3 and then return that value

//2. Comparison
// Used for checking equality or inequality between two values.
// == Equal to
// != Not equal to
// === Strictly equal to (Value and Type both should be same)
// !== Strictly not equal to (Both Value and Type mustn't be same)
// > Greater than
// < Less Than
// >= Greater than or Equal to
// <= Less than or Equal to
if (a == b) {
    console.log("Values are equal")
} else {
    console.log("Values are not equal")
}

if (a === b) {
    console.log("Both value and type are equal")
} else {
    console.log("Either value or type is not equal")
}

if (a != b) {
    console.log("Values are not equal using '!=' operator")
}

if (a !== b) {
    console.log("Both value and type are not equal using '!==' operator")
}

//3. Logical operators
// && means AND, if both sides of && are true then condition becomes true
// || means OR, if any one side of || is true then condition becomes true
// ! means NOT, If expression inside ! is false then condition becomes true otherwise false
let x = true;
let y = false;

if (x && y) {
    console.log("Both conditions are true"); // This will never execute because "y" is false
}

if (x || y) {
    console.log("At least one condition is true");  
    // This will always execute because "x" is true
}

if (!x) {
    console.log("Value is false");  // This will execute because "x" is true
}

//4. Ternary Operator
// It is a shorthand for an if/else statement.
let num = 10;
num > 5 ? console.log("Number is greater than 5") : console.log("Number is less than or equal to 5");

//5. Assignment
// Assign values to  variables using = operator. It is used for both simple and complex assignment.
let obj = {};
obj.name = "John";
console.log(obj.name);

//7. Bitwise
// & - bitwise AND
// | - bitwise OR

//8. Type
// typeof returns the data type of variable
console.log(typeof "Hello World"); // Output: string
console.log(typeof 25);           // Output: number