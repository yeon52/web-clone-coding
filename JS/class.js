'use strict';
// Object-oriendted programming
// class: template //틀
// object: instance of a class //클래스의 내용
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
    constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
    }

  // methods
    speak() {
    console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    get age() { //값 리턴
        return this._age;
    }

    set age(value) { //값 설정 
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
    this.articleNumber = articleNumber;
    }

    static printPublisher() {
    console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //static은 오브젝트가 아닌 class 소속이기 때문에 클래스.로 호출해야함.
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    }

    draw() {
    console.log(`drawing ${this.color} color!`);
    }

    getArea() {
    return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
    super.draw(); //부모의 draw
    console.log('🔺');
    }
    getArea() { //overwriting
    return (this.width * this.height) / 2;
    }

    toString() {
    return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue'); //shape를 상속하므로 shape의 구성을 모두 쓸 수 있음.
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
    value.value = 7;
}
change(obj);
console.log(obj);