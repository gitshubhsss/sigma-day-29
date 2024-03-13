//splice() makes changes in Original Array where slice does not makes any changes
//if we pass only one argument to the splice() so it will work same as the slice
// eg fruits.splice(4)=fruits.slice(4)
//splice can take 3 argument 1.start 2.from start how many elements you wants to delete
//3.we can insert the element at the position where the elements has deleted alredy

let friends = ["shubham", "pavan", "ashish", "omkar", "sumit", "akash"];

// console.log(friends.splice(2));//[ 'ashish', 'omkar', 'sumit', 'akash' ]
console.log(friends.splice(3, 1, "Amit")); //[ 'omkar' ]
console.log(friends); //[ 'shubham', 'pavan', 'ashish', 'Amit', 'sumit', 'akash' ]
console.log(friends.splice(3)); //[ 'Amit', 'sumit', 'akash' ] form the index 3 till the lenth of the array delete all the element
console.log(friends);
friends.splice(2,0,"Omkar","Sandesh")
console.log(friends);//[ 'shubham', 'pavan', 'Omkar', 'Sandesh', 'ashish' ]
friends.push("Alam","Arif");
console.log(friends);