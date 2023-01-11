/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'hola')
// first.classList.add('hello');
// first.classList.remove('hello');
// first.classList.toggle('hello');
// console.log(first.classList.contains('is-active'));

/* 아래의 함수들은 css.js에 유틸함수로 만들어져 있습니다 --------------------------------------------------------- */

// 변경하기 : 대상의 클래스 추가
// const addClass = (node, className) => {
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }

//   if (typeof className !== 'string') {
//     typeError('addClass 함수에 두번쨰 인자는 문자타입이어야');
//   }

//   node.classList.add(className);
// };

// 변경하기 : 대상의 클래스를 지운다
// const removeClass = (node, className) => {
//   if (typeof node === 'string') node = getNode(node);

//   if (!className) {
//     node.className = '';
//     return;
//   }

//   if (typeof className !== 'string') {
//     typeError('addClass 함수에 두번쨰 인자는 문자타입이어야');
//   }

//   node.classList.remove(className);
// };

// 변경하기 : 클래스 껐켯
// const toggleClass = (node, className) => {
//   if (typeof node === 'string') node = getNode(node);

//   if (typeof className !== 'string') {
//     typeError('addClass 함수에 두번쨰 인자는 문자타입이어야');
//   }

//   node.classList.toggle(className);
// };

// addClass('.first', 'aaa');
// removeClass('.first', 'aaa');
// toggleClass('.first', 'is-active');

/* ------------------------------------------------------------------------------------------------------- */

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.transform = 'rotate(360deg)';

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
let size = getComputedStyle(first).margin;
console.log(size);
