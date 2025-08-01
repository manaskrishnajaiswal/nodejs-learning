// console.log(process.argv[0]); // 0 1 2 3 4 5
const third = process.argv[2];
const fourth = process.argv[3];
const fifth = process.argv[4];

if (third == "double") {
  console.log(fourth * 2);
}

if (third == "modulo") {
  console.log(fourth % fifth);
}
