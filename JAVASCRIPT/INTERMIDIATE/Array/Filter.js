// To find a Even numbers
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let FindNumber = number.filter((number) => number % 2 === 0);
console.log(FindNumber);
// filter a Data  
const people = [
  { NAME: "Bala", AGE: 18, CITY: "Chennai" },
  { NAME: "Arun", AGE: 23, CITY: "Bangalore" },
  { NAME: "Priya", AGE: 22, CITY: "Hyderabad" },
  { NAME: "Karthik", AGE: 19, CITY: "Mumbai" },
  { NAME: "Divya", AGE: 20, CITY: "Pune" },
];

const eligible = people.filter((value) => (value.AGE>=20));

console.log("Filter use To Find a Eligible of above 20 AGE :",eligible);

//filter a Above 4 letter 

const data = ["Chennai" ,"Bangalore","Hyderabad","Mumbai","Pune" ]

const finalData= data.filter((D)=>D.length>5)

console.log("Filter a Length :",finalData);

// multiple condition to check with filter function

const multiData = data.filter((value)=>value.length>=6 && value.startsWith('B'))

console.log("multiple condition: ",multiData);


let books=[
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics', author: 'Jennifer Niederst Robbins', year: 2012 },
    { title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011 },
    { title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'Lea Verou', year: 2015 },
    { title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', year: 2014 },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },
    { title: 'React: Up & Running', author: 'Stoyan Stefanov', year: 2016 },
    { title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014 },
    { title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year: 2004 }
];

const FindName="HTML".toLowerCase();
const FindYear= 2011;

const finalBooks=books.filter((e)=>{
   return e.title.toLowerCase().includes(FindName) ||  e.year===FindYear
})

console.table(finalBooks);

