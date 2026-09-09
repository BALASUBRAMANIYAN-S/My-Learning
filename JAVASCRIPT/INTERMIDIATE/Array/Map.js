// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use the map() method to create a new array with the square root of each number
const Square = numbers.map((value) => {
    // Calculate the square root of the current value and round it to 2 decimal places
    return Math.sqrt(value).toFixed(2);
});

// Display the resulting array in a table format in the console
console.table(Square);

/*Array use map function to convert a Capital letter */

const words =['bala','Sam','apple']

const CapitalWords = words.map((value,index)=>{
   return value.toUpperCase();
})

console.log(CapitalWords);

// combination Array 

const Names= ["Bala","Apple","Band"];
const Color=["Black","Red","Yellow"];

const Output = Names.map((value,index)=>{
   return value+" = "+Color[index];
  
   
})

console.log(Output);
