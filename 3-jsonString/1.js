const book = {
  title: "To Kill a Mockingbird",
};

const jsonstring = JSON.stringify(book);
console.log(typeof jsonstring); // Output: {"title":"To Kill a Mockingbird"}
console.log(typeof book); // Output: {"title":"To Kill a Mockingbird"}
