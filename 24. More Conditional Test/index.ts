// Test for equality and inequality with strings

let mango = "mango";
let upperCaseMango = "Mango";

console.log("Is mango is equal to mango?");
console.log(mango == mango);

console.log("Is mango is not equal to mango?");
console.log(mango != mango);


// Tests using lower case function

console.log("\nIs Apple is equal to apple after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() == 'mango');

console.log("Is Apple is not equal to apple after convering to lowercase?");
console.log(upperCaseMango.toLowerCase() != "mango");


// Numerical tests
let ten = 10;
let twenty = 20;

// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("Is ten is greater than 5?");
console.log(ten > 5 );

// less than
console.log("Is twenty less than 10?");
console.log(twenty < 10);

// Greater than or equal to
console.log("Is ten is greater than or equal to 5?");
console.log( ten >= 5);

// less than or equal to
console.log("Is twenty is less than or equal to 10?");
console.log( twenty <= 10);


//Test using "and"  and "or" operators
//using && (and) operator
console.log("\ntwenty is not equal to 10 and 20 is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is greator than 10 and 10 is greater than 20");
console.log(twenty >10 && ten>20);

// using || (or) operator
console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || twenty == 20);

console.log("20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || twenty != 20);


// Test wheather an item is include in array

let fruits = ["Kiwi", "Mango", "Banana"]
console.log("Is Banana is include in my array");
console.log(fruits.includes("Banana")); 

// // not include
console.log("Is Kiwi is not include in my array");
console.log(!fruits.includes("Kiwi"));