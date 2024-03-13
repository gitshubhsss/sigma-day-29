let students=["omkar","suraj","shubham"];
// console.log(students[2].length);//shubham words length
//array are mutable means we can change the array even if it is declared
students[1]="rohanm";
console.log(students);

//we can insert the element at any index in arry

students[71]="ashish";
console.log(students);

// output- [ 'omkar', 'rohanm', 'shubham', <68 empty items>, 'ashish' ]

console.log(students.length);
