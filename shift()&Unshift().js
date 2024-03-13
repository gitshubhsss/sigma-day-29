let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);
//[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ] //add the element to the first index
fruits.shift()
console.log(fruits);

//[ 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ] //delete the first element