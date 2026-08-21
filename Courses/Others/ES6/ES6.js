// let & const
let a = 10;
const b = 20;

// Arrow function
const add = (x, y) => x + y;
console.log(add(5, 7)); // 12

// Default parameter
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet(); // Hello Guest

// Destructuring arrays
let [x, y] = [10, 20];
console.log(x, y); // 10 20

// Template Literals
const name = "Bala";
console.log(`Hello ${name}`);

// Spread Operator ...
const a = [1, 2];
const b = [...a, 3, 4];
console.log(b); // [1, 2, 3, 4]
