// Line 1: Top-level 'this' in Node.js refers to 'module.exports'
console.log(this); // Output: {}

// Line 2: Add a property to module.exports
module.exports.nickName = "ismail";

// Line 3: Now 'this' (which is still module.exports) has 'nickName'
console.log(this); // Output: { nickName: 'ismail' }

// Line 4: Define a global variable
global.age = 40;

// Line 5–7: Define a regular function
function hi() {
  // Inside regular functions in Node.js, 'this' refers to the global object
  console.log(this.age); // Output: 40
}

// Line 9: Call the function
hi();
