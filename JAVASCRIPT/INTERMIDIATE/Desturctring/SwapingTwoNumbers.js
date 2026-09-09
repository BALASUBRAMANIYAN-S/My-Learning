//Normal Swapping a Two NUmber

let a = 10;
let b = 20;
console.log("Before :- ","A Value :", a, "", "B Value :", b);
let c = a;
a = b;
b = c;
console.log("After :- ","A Value :", a, "", "B Value :", b);

//After ES6

let d = 10;
let e = 20;
console.log("Before :- ","D Value :", d, "", "E Value :", e);
[d, e] = [e, d];
console.log("After :- ","D Value :", d, "", "E Value :", e);
