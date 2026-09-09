// Function with arbitrary arguments
function sum() {
    let total = 0;  // Always declare with let/var/const
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]; // Add each argument
    }
    return total;
}

console.log(sum());         // No arguments → 0
console.log(sum(10));       // One argument → 10
console.log(sum(10, 20));   // Two arguments → 30
console.log(sum(5, 15, 25, 35)); // Multiple arguments → 80
