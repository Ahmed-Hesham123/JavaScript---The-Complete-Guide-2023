class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Ahmed";

  constructor() {
    super();
    this.age = 20;
  }

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old. "
    );
  }
}

// function Person() {
//   this.age = 20;
//   this.name = "Ahmed";
//   this.greet = () => {
//       console.log(
//           "Hi, I am "+this.name+" and I am "+this.age+" years old. "
//       );
//   }
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

Person.prototype.printAge = () => {
  console.log(this.age);
}

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);
const p2 = new p.__proto__.constructor();
console.log(p2);
