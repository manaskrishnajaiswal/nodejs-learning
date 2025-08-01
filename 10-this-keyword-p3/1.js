// const student = {
//   name: "Jason",
//   siblings: ["Adam", "Smith"],
//   showSiblings: () => {
//     console.log(this.name);
//   },
// };

// student.showSiblings();

const student = {
  name: "Jason",
  siblings: ["Adam", "Smith"],
  showSiblings: function () {
    console.log(this.name);
  },
};

student.showSiblings();
