/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

console.log(typeof arr);
console.log(Array.isArray(arr));

function isArray(data) {
  Object.prototype.toString.call(data).slice(8, -1).toLowercase() === 'array';
}

console.log('Array', Array.isArray(['시계', '바보', '똥']));

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = [];

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

console.log('🚀 ⁝ user', user);

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target);
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();

// splice
//          시작 제거 [추가]
arr.splice(1, 0, 23, 5);

// sort
// 반환값 < 0 : a가 b보다 앞에 있어야한다.
// 반환값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환값 > 0 : b가 a보다 앞에 있어야한다

arr.sort((a, b) => {
  return a - b;
});

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기', '미용실가기', '코딩하기'];

let newArr = arr.map((item) => item * 2);

console.log(newArr);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes
console.log(arr.includes(10));

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  { id: 1, name: '스다' },
  { id: 2, name: '하은' },
  { id: 3, name: '유림' },
];

// find
const find = users.find((item, index) => {
  return item.id < 5;
});
console.log('🚀 ⁝ find ⁝ find', find);

// findIndex
const findIndex = users.findIndex((item) => {
  return item.id === 3;
});
console.log('🚀 ⁝ findIndex ⁝ findIndex', findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number) => {
  return number > 100;
});
console.log('🚀 ⁝ result ⁝ result', result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '산적',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '쌔너',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '야호',
    age: 21,
    job: '물음표살인마',
  },
];

// reduce

// 숫자값이라고 지정해줘야함!!(뒤에 0 붙인거)
let age = friends.reduce((acc, cur) => {
  let age;
  return acc + cur.age;
}, 0);
console.log('🚀 ⁝ age ⁝ age', age);

let template2 = todo.reduce((acc, cur) => {
  return /* html */ `<li>오늘의할일 : ${cur}</li>`;
});
console.log('🚀 ⁝ template2 ⁝ template2', template2);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '에수다 뷘시 금동이 춘기 산적뷘';

// split : 문자 -> 배열
let nameArr = str.split(' ');
console.log('🚀 ⁝ nameArr', nameArr);

// join : 배열 -> 문자
console.log(nameArr.join('/'));
