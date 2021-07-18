
//1. use strict 사용. (바닐라 자바스크립트에서만)
//added in ES 5
'use strict';

//2. Variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name'; //글로벌 변수, 어느곳에서나 접근 가능

//블럭 지정 시 블럭 안에서만 사용 가능 - block scope
{
    let name = 'gayeon';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var - 이제 더이상은 쓰면 안됨!
//var hoisting - 어디에 선언했는가와 상관없이 선언을 항상 제일위로 끌어올려주는 것.
//block scope이 없음. 
//아래는 var만 가능함.
{
    age = 4;
    var age;
}
console.log(age);

//3. constant, r(read only)
//값을 선언함과 동시에 고정. 변경할 수 없음 - immutable
// 웬만하면 const 쓰자 !
// <-> mutable
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types : primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// - security
// - thread safety(다양한 스레드가 동시에 접근, 변경하면 위험)
// - reduce human mistakes


//4. variable types
//primitive, single item(더이상 나눠질 수 없음) : number, string, boolean, null, undefined, symbol
//object, box container(single item을 묶은것)
//function, fisrt-class function - 함수도 데이터타입처럼 변수할당, 함수 파라미터, 리턴 모두 가능

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

//number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template iterals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false:0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3<2; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects (고유한 식별자 필요할때)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //주어진 string에 상관없이 고유한 식별자가 만들어짐.

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age:20};
ellie.age = 21;//가능. ellie는 const지만 그 안의 변수들은 그렇지 않아 접근이 가능


//5. Dynamic typing: dynamically typed language - 변수 선언 시 타입 선언 불필요. 런타임에 따라 변경 될 수 있음.
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //에러 --> 이러한 불편함으로 ts가 등장.

