let str="My Name Is Shubham";

console.log(str.slice(3)); //now it will assume the last index as a length of the string
console.log(str.slice(3,7));//Name (here will pass the starting index and the lastIndex +1)
console.log(str.slice(-7));//-7 means the str.length -7 