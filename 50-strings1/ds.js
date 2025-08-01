const text = "Hello, World!";

// String length
console.log(text.length);

// Accessing characters
console.log(text.charAt(3));
console.log(text[3]);

// Getting character at a specific index
function getCharAtIndex(str, index) {
  return str[index];
}
console.log(getCharAtIndex(text, 3));
