// class Person {
//     name = "Ahmed";

//     constructor() {
//         this.age = 20;
//     }

//     greet() {
//         console.log(
//             "Hi, I am "+this.name+" and I am "+this.age+" years old. "
//         );
//     }
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

const person = new Person();
person.greet()