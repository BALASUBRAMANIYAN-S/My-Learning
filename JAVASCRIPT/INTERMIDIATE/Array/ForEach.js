{/*  ForEach Array is a print each element of array:*/}

// Create an array of fruits
const fruits = ['apple', 'banana', 'mango'];

// Use forEach to print each fruit in the array
fruits.forEach(fruit => console.log(fruit));


{/* Using a forEach method to find the sum of all elements in an array */}

// Create an array of numbers
const Numbers = [1, 2, 3, 4, 5];

// Variable to hold the sum
var total = 0;

// Use forEach to add each number to total
Numbers.forEach(Num => {
    total += Num;  // Add the current number to total
});

// Print the final sum
console.log(total);   // Output: 15


{/* Using a forEach method to create a new array with double the values */}

// Empty array to store doubled numbers
const DoubleNumbers = [];

// Use forEach to go through each number and push its double into the new array
Numbers.forEach(Num => {
    DoubleNumbers.push(Num * 2);  // Multiply each number by 2
});

// Print the doubled numbers array
console.log(DoubleNumbers);   // Output: [2, 4, 6, 8, 10]


{/* Using a forEach method to Find a biggest Number in the Array */}

let FinMax=Numbers[0]; //assign a value 

Numbers.forEach((num)=>{
    if (num>FinMax){ // if use condition check 
        FinMax=num
    }
})
console.log(FinMax);


const Names= ['bala','athi','mike','Rohit']

Names.forEach((nae,index)=>{
    Names[index]=nae.toUpperCase();
})

console.table(Names);
