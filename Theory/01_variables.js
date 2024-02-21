// In Javascript, variables can be declared in 4 ways:
/* - Automatically
   - using "var"
   - using "let"
   - using "const" */

// var
/*
- var is globally scoped
- var can be updated and re-declared within its type.
- Re-declaring variable inside a block will also redeclare the variable outside the block.
*/
{
    var a= "Dhruv"
    console.log(a);
}
console.log(a);

// let
/*
- let is block scoped.
- let can be updated and but cannot be re-declared within its type.
*/

{
    let b= "Desai"
    //let b //Cannot redeclare block-scoped variable 'b'
    b= "Atom" //Updating value of b withing its type
    console.log(b);
}
console.log(b); //Throws error--> ReferenceError: b is not defined

// const
/*
- const is block scoped
- const can neither be updated nor re-declared within its type.
- It does not define a constanct value. It defines a constant refrence to a value.
- Meaning, reassigning a constant value, array, object is not allowed but changing the element of an array, properties of an object is allowed.
- Use const when declaring: array, object, and function.
*/

const PI= 3.14;

const cars = ["Audi", "Porsche", "BMW"]