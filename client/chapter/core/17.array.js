/* ---------------------------------------------------------------------- */
/* Array Type                                                             */
/* ---------------------------------------------------------------------- */

function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('chrome') >= -1) browser = 'chrome';
  else if (ua.indexOf('edge') >= -1) browser = 'edge';
  else if (ua.indexOf('whale') >= -1) browser = 'whale';
  else if (ua.indexOf('safari') >= -1) browser = 'safari';
  else if (ua.indexOf('firefox') >= -1) browser = 'firefox';

  return browser === browserName;
}

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용.
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.

// 배열 선언
// let friends = ['코코', '나나', '뚜비', '말랑', '콩떡'];
let friends = '코코, 나나, 뚜비, 말랑, 콩떡'.split(','); //원시타입 객체
let arr = new Array(6, 5, 4, 3, 2, 1);
console.log('🚀 ⁝ friends', friends);
console.log('🚀 ⁝ arr', arr);

// 배열 요소의 총 갯수
console.log('🚀 ⁝ friends.length', friends.length);

// 배열 요소 변경
friends[0] = '미니';
console.log('🚀 ⁝ friends', friends);

// 배열 요소 추가
let unshift = friends.unshift('호쨔'); // 앞에넣기
console.log('🚀 ⁝ friends', friends);

let push = friends.push('순대'); // 뒤에넣기
console.log('🚀 ⁝ friends', friends);

// 배열 요소 제거
let shift = friends.shift(); // 앞에 제거
console.log('🚀 ⁝ shift', shift);
console.log('🚀 ⁝ friends', friends);

let pop = friends.pop(); // 뒤에 제거
console.log('🚀 ⁝ pop', pop);
console.log('🚀 ⁝ friends', friends);

// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑

// 배열 요소 순환(loop)
// for 문, for ~ of문
for (let value of friends) {
  console.log(value);
}

// 배열 복사 (스프레드로 제대로 복사해보자)
let copiedArray = [...friends];
console.log('🚀 ⁝ copiedArray', copiedArray);

// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
console.log(matrix[1][1]);
