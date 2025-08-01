const text = "John 94194";

// replace white space with underscore
const newText = text.replace(" ", "_");
console.log(newText); // Output: John_94194

// replace "94" with "00"
const newText2 = text.replace("94", "00");
console.log(newText2); // Output: John 004194

// replace all occurrences of "94" with "00"
const newText3 = text.replaceAll("94", "00");
console.log(newText3); // Output: John 004100

// split the string into an array of words
const textSplit = text.split(" ");
console.log(textSplit); // Output: [ 'John', '94194' ]

// split the string into an array of characters
const textSplit2 = text.split("");
console.log(textSplit2); // Output: [ 'J', 'o', 'h', 'n', ' ', '9', '4', '1', '9', '4' ]
