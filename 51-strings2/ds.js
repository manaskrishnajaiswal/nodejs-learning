const text = "Hello World";

console.log(text.slice(1, 9));
console.log(text.substring(1, 9));

for (let i = text.indexOf("e"); i <= text.indexOf("r"); i++) {
  console.log(text[i]);
}
