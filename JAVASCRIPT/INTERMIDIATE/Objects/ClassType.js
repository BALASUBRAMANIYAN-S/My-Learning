// Class = blueprint
class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
}

// Object = class type object
const myCar = new Car("BMW", "X5");

console.log(myCar); 
// Car { name: "BMW", model: "X5" }
