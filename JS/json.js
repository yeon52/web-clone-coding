'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () {
    console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit); //함수나 js에만 있는 데이터들은 json에 포함되지 않음.
console.log(json);

//원하는 부분만 전송 가능.
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

//더 자세한 처리가 필요하다면 콜백함수 이용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump(); 
// obj.jump();//함수는 json이 될 때 사라졌으므로 없어짐.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
