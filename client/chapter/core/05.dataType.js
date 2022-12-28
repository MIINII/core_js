/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = 'hello';
let message2 = 'hello';
let message3 = `hello`;

console.log('🚀 ⁝ message3', message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;
console.log('number : ', typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(12912n + 123n);
console.log(typeof 12913n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('uid'));
console.log(typeof Math);
const fuc = function () {};
console.log(typeof fuc);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
const sth = new Object(); // 생성자 함수(대문자로 시작함)

// 객체리터럴
const user = {
  // 프로퍼티!
  name: 'miinii',
  age: 28,
  // 객체 안에 있는 함수는 메서드!
  fish: function () {
    return '뻐끔뻐끔';
  },
};

console.log(user);

// Array
let list = new Array();

// 배열리터럴
let l2st = [10, 100, 100];
// list.length

// function
// function sum() { return 1 + 2; }
// console.log('🚀 ⁝ sum ⁝ sum()', sum());

function fishBreadcase(data) {
  return `${data}맛 붕어빵 입니다🐟`;
}

console.log(fishBreadcase('슈크림'));

// this
