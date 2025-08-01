const text = "Hello World";

// This will return the index of the first occurrence of "o"
// console.log(text.indexOf("o"));

const firstIndex = text.indexOf("o");
console.log(firstIndex);

console.log(text.indexOf("o", firstIndex + 1)); // Find the next occurrence of "o"
