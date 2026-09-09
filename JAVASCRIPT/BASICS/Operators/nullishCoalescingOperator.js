
//nullishCoalescingOperator
const a =null ?? 10;
console.log(a)

const user ={
    'name':"Bala"
}

console.log(user)
user.age??=20;
console.trace(user)
console.log(user.age)
