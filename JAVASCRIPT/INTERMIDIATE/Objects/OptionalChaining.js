// //OptionalChaining onl for read & Delete

const user = {
  name: "BALA",
  // address:{
  //     City:"Thanthani"
  // }
};

//option 1
console.log(user.address && user.address.City);
//option 2
console.log(user.address ? user.address.City : undefined);
//option 3
console.log(user.address?.City); //OptionalChaining method for prevent a Error & show a Undefined
