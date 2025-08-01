let some = (20 / 5) * 2 + "9";

console.log(some);
console.log(typeof some);

let str = "Hello, World!";
// Reverse the string
// Using split, reverse, and join methods
const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);
console.log(typeof reverseStr);

for (let i = str.length - 1; i >= 0; i--) {
  str += str[i];
}
str = str.slice(str.length / 2);
console.log(str);

// Function to check if an email is valid
// Valid email format: 1-30 characters before '@', 1-15 characters for domain, and 2-10 characters for TLD
function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9_-]{1,30}@[a-zA-Z0-9-]{1,15}\.[a-zA-Z]{2,10}$/;
  return emailRegex.test(email);
}

console.log(isEmailValid("manas@gmail.com")); // true
console.log(isEmailValid("manas@com")); // false

// Example of type coercion in JavaScript
let a = 2 + "10" / 4;
console.log(a);
console.log(typeof a);

// More examples of type coercion
let b = 2 + "1" - 5;
console.log(b);
console.log(typeof b);

// Concatenation of a number and a string
let c = 2 + "1" + 5;
console.log(c);
console.log(typeof c);

let d = 6 + "10" * 6;
console.log(d);
console.log(typeof d);

let e = 6 + ("10" % 3);
console.log(e);
console.log(typeof e);
