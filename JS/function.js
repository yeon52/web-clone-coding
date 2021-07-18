// Function

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb 함수명은 동사! 하는 일로 작명
// e.g. createCardAndPoint -> createCard, createPoint - 잘게 쪼개는 것이 좋음
// function is object in JS - 자스에선 함수는 object

function printHello() {
    console.log('Hello');
}
printHello();
  
function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
//파라미터가 들어오지 않았을 때 디폴트 값 설정
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// ...을 쓰면 배열로 받음. 
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie'); //3개의 값이 들어간 배열로 전달됨.

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable, 지역변수
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// 조건이 맞지 않는 경우 빨리 return하도록 짜는 것이 좋음.
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// 함수는 변수가 될 수 있고
// 함수에 파라미터로 전달 될 수 있고
// 리턴값이 될 수 있다.

// 1. Function expression
// a function declaration는 뒤에 선언을 제일 위로 끌어주므로(hoisted) 선언 전에도 호출 가능
// a function expression는 선언된 후에 호출이 가능.
const print = function () {
  // anonymous function, 이름 없는 함수. 변수에 할당
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum; //위에서 만든 함수
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
//상황에 맞을 때, 함수를 호출 하는 것 - 콜백함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes(); //콜백
  } else {
    printNo(); //콜백
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function - 디버깅을 위하거나, 재귀함수 사용 시
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
//많은 내용 처리 시 블록사용. return써야함
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 선언 함과 동시에 호출
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));