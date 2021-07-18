//1. String concatenation
console.log('my'+' cat');
console.log('1'+2); // 숫자가 문자로 바껴서 더해짐
console.log(`string literals: 1+2=${1+2}`);
console.log('ellie\'s \n\tbook');

//2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(1%1); //remainder
console.log(1**1); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //먼저 증가 후 대입
//counter = counter+1;
//preIncrement = counter;
const postIncrement = counter++; //대입 후 증가
//postIncrement = counter;
//counter = counter+1;
const preDecrement = --counter;
const postDecrement = counter--;

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x=x+y
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10<6); //less than
console.log(10<=6);// less than or equal
console.log(10>6); // greater than
console.log(10>=6); //greater than or equal

//6. logical operator : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4<2;

// ||, 앞에서 하나라도 true를 만나면 바로 멈추고 뒤에 연산은 하지 않음
console.log(`or: ${value1 || value2 || check()}`);
// --> 연산이 많은 무거운 함수들은 뒤로, 간단한 데이터를 앞으로 배치하는게 효율적.


//&&, 하나라도 false면 멈춤.
console.log(`or: ${value1 || value2 || check()}`);

//null체크에서도 자주 사용됨.
//nullableObject && nullableObject.something
// --> null이 아닐 경우에만 뒤에가 실행, 값을 가져옴

function check(){
    for (let i=0; i<10; i++){
        //wasting time
        console.log('oh');
    }
    return true;
}

//!, 값을 반대로 변경

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive) // true

// === strict equlity, no type conversion
console.log(stringFive === numberFive) // false
// --> 웬만하면 ===를 쓰는게 좋음.

//object equality by refernce
const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3 = ellie1;
console.log(ellie1==ellie2); //false -> 서로 다른 레퍼런스, 서로다른 object를 가리키고 있음
console.log(ellie1===ellie2); //false --> 서로 다른 레퍼런스.
console.log(ellie1===ellie3); //true

console.log(0==false); //true
console.log(0===false); //false
console.log(''==false); //true
console.log(''===false); //false
console.log(null==undefined); //true
console.log(null===undefined); //false

//8. Conditional operators : if
//if, else if, else
const name = 'df';
if (name === 'ellie'){
    console.log('welcom ellie');
} else if(name === 'coder'){
    console.log('you are amazing coder');
} else{
    console.log('unknown');
}

//9. Ternary operator: ?
//condition ? value1:value2;
console.log(name === 'ellie'?'yes':'no');

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

//11. loops
let i = 3;

while (i>0){
    console.log(`white: ${i}`);
    i--;
}

//do while loop : do 안을 먼저 실행 후 while 실행
do {
    console.log(`white: ${i}`);
    i--;
} while(i>0);

//for loop, for(begin; condition, step)
for (i=3;i>0;i--){
    console.log(`for: ${i}`);
}

for (let i=3;i>0;i=i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0;i<10;i++){
    for(let j = 0;j<10;j++){
        console.log(`i:${i}, j:${j}`);
    }
}

//break, continue
//continue를 이용하여 0에서10까지 중 짝수만 출력
for(let i=0;i<10;i++){
    if(i%2!==0)
        continue;
    console.log(i);
}
//break를 이용하여 0에서 10까지의 수를 출력하는데, 8에 도달하면 멈추기
for(let i=0;i<10;i++){
    if(i>8)
        break;
    console.log(i);
}