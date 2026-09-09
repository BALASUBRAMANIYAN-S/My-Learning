/*
   ✅ Variable:
   a = 10  → Stores a single value

   ✅ Array:
   a = [10, 20, 30, 40, 50] → Stores multiple values in one variable
*/

let a = [10, 20, 30, 40, 50];  // Array declaration

console.log("Array values:", a);       // Print the whole array
console.log("First value:", a[0]);     // Access 1st element (index starts from 0)
console.log("Third value:", a[2]);     // Access 3rd element
console.log("Array length:", a.length); // Number of elements



{/* Array la constructor value store */}

let b=new Array(10,20,30,40,50)
console.table(b)

{/*This is a Multiple values Store a Array */}
let c = ["BAlA",20,true,{Name:"Bala",School:"MCE",location:"Keeranur"}]
console.table(c)