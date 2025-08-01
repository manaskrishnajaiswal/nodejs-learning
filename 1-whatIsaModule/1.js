require("./db");
console.log("From 1.js");

function showMessage(message) {
  console.log("This is a message from 1.js: " + message);
}

module.exports = showMessage;
