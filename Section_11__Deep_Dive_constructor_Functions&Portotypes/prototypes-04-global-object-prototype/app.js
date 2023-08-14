// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Ahmed";

//   constructor() {
//     super();
//     this.age = 20;
//   }

//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old. "
//     );
//   }
// }

function Person() {
  this.age = 20;
  this.name = "Ahmed";
  this.greet = () => {
      console.log(
          "Hi, I am "+this.name+" and I am "+this.age+" years old. "
      );
  }
}

Person.describe = () => {
  console.log("Creating persons...");
}

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

Person.prototype.printAge = () => {
  console.log(this.age);
}

console.dir(Person);

const p = Person();
p.greet();
p.printAge();
console.log(p);
console.log(p.toString());
const p2 = new p.__proto__.constructor();
console.dir(Object.prototype.__proto__);
