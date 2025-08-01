const book = '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}';

const jsObject = JSON.parse(book);
console.log(jsObject);
console.log(typeof jsObject);
console.log(typeof book);
