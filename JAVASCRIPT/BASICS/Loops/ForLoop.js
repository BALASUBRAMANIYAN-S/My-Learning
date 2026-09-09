const name = prompt("Enter Your Name And Find Your Letters :");
let Count;
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
  Count = i+1;
}

console.log("Letter Total Count is: ", Count);
setTimeout(() => {
  alert("Letter Total Count is: " + Count);
}, [500]);
