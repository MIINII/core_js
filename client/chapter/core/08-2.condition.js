/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = prompt('나이를 입력하세요');
let age = 30;

if (age >= 14 && age <= 90) {
  console.log('건장한 청년이다');
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log('🚀 ⁝ whichFalsy', whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
console.log('🚀 ⁝ whichTruthy', whichTruthy);

console.log(2 == true);
console.log(0 == false);

// let userName = prompt('아디를 대라');
// let userPw = prompt('암호는');
