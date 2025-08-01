// const student = {
//   name: "Jason",
//   siblings: ["Adam", "Smith "],
//   showSiblings() {
//     this.siblings.forEach(function (sibling) {
//       console.log(`${this.name}'s sibling is ${sibling}`);
//     });
//   },
// };

// student.showSiblings();

const student = {
  name: "Jason",
  siblings: ["Adam", "Smith "],
  showSiblings() {
    this.siblings.forEach((sibling) => {
      console.log(`${this.name}'s sibling is ${sibling}`);
    });
  },
};

student.showSiblings();
