'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)

//후에 추가 , 삭제가 가능.
//하지만 이렇게 동적으로 짜는것은 되도록 지양하기
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
//'.' 또는 '[]'로 key에 접근이 가능.
//안에 있는 데이터를 접근할때에는 '.'로 접근하지만, 
//key가 확실하지 않을때(변수일때),'[]'로 접근 가능. --> key는 string으로 
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function //class의 생성자처럼.
function Person(name, age) {
  // this = {};
    this.name = name;
    this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
//키가 오브젝트 안에 있는가,
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) { //key가 차례로 출력
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) { //값이 출력
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder'; //같은 값을 가리키기 때문에 둘다 바뀜.
console.log(user);

//깊은 복사
// old way //예전에는 빈 오브젝트에 for로 하나씩 다시 넣어주는 방법으로 복사함.
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//최근
const user4 = Object.assign({}, user); //두개가 섞인 값 return
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size); //big