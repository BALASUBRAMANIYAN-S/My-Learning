const nested = [1, [2, 3], 4];

const [x, [y, z], w] = nested;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(w); // 4
