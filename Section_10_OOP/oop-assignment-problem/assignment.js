class Course {
    #price;


    get price() {
        return '$'+this.#price;
    }

    set price(value) {
        if(value < 0){
            throw 'Invalid Value!';
        }
        this.#price = value;
    }

  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  calcValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price:${this.price}`
    );
  }
}

const jsCourse = new Course("JS - The Complete Guide", 50, 57);
const reactCourse = new Course("React - The Complete Guide", 50, 41);
console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calcValue());
console.log(jsCourse.printSummary());

console.log(reactCourse.calcValue());
console.log(reactCourse.printSummary());

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, price, length);
    this.numOfExercises = exercisesCount;
  }
}

const angularCourse = new PracticalCourse(
  "Angular - The Complete Guide",
  36,
  50,
  10
);

console.log(angularCourse);
console.log(angularCourse.printSummary());

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

const flutterCourse = new TheoreticalCourse(
  "Flutter - Build iOS and Android Apps",
  50,
  48
);



console.log(flutterCourse.printSummary());
console.log(flutterCourse.publish());;


