//This function is arrow Function 
const add=(e)=>{return 10+e}
console.log("function is arrow Function ",add(1))

//arrow function with map function 

const arr=[1,2,3,4,5];
console.log("arrow function with map function ",arr)
const doubleArr=arr.map(Number=>Number*2)
console.table("arrow function with map function ",doubleArr)

// arrow function with filter 

const Fruit = ["Apple", "Banana", "Mango", "Pineapple"]
console.log("arrow function with filter ",Fruit)
const FruitName = Fruit.filter(index=>index.length>5) ;
console.log("arrow function with filter ",FruitName)
