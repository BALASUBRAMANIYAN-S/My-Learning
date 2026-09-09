//Conditional OR Ternary Operator

const age = 17;
const result = age >= 18 ? "Eligible to vote" : "Not Eligible to vote";
console.log(result);

function welcome(name) {
  const result = name ? name : "No name";
  console.log("Welcome " + result);
}

welcome("bala");

const user = {
  name: "Bala",
  age: 21,
};

const wel = (user) => {
  results = user? user.name : "No Name";
  console.log("Hi " + results);
};
wel(user);

//Chain Condition  
const mark = 70;
const res = mark>=90? "A Grade" : mark>=80? "B Grade": mark>=70? "C+ Grade" : "C Grade"

console.log(res)
