// const student = {
//   first_Name: "John",
//   last_Name: "Doe",
//   getFullName() {
//     return first_Name + " " + last_Name; // ❌ ReferenceError
//   },
// };

// console.log(student.getFullName());

const student = {
  first_Name: "John",
  last_Name: "Doe",
  getFullName() {
    return this.first_Name + " " + this.last_Name; // ❌ ReferenceError
  },
};

console.log(student.getFullName());
// this keyword refers to the object that called the method
// always look how the function is called
