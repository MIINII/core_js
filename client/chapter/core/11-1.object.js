/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'useri-id-asdfasdfef',
  name: 'miinii',
  email: 'asdf@naver.com',
  isSignIn: true,
  permisson: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = 'phone') {
  return {
    name: 'unknown',
    email: 'unknown@company.com',
    [computedProp]: '01000000000',
  };
}

const user = createUser('tel');

Object.prototype.SIGN = true;

// 프로퍼티 포함 여부 확인
for (let key in authUser) {
  if (Object.prototype.hasOwnProperty.call(authUser)) {
    console.log(key);
  }
}

// 프로퍼티 나열 authUser : 객체 -> 배열로
let keyArr = Object.keys(authUser);
let valueArr = Object.values(authUser);

// 키값만 리턴하기...?
function getPropertyList(object) {
  return Object.keys(object);
}

let result = getPropertyList(authUser);
console.log(result);

// 프로퍼티 제거 or 삭제
// 01. 함수이름 정하기
// 02. 인수(arguments)와 인자(parameter) 정하기
// 03. 확인하기(validation)
// 04. 리턴값(return)

function removeProperty2(object, key) {
  if (!(typeof object === 'object')) {
    //throw
  }

  object[key] = null;
}

const removeProperty = (object, key) => {
  object[key] = null;
};

const deleteProperty = (object, key) => {
  delete object[key];
};

console.log(removeProperty(authUser, 'uid'));
console.log(deleteProperty(authUser, 'uid'));

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 ? false : true
function isEmptyObject(object) {
  return getPropertyList(object).length === 0;
}

let salaries = {
  John: 100,
  Ann: 160,
  pete: 430,
};

// 월급의 총합
// ==========================================================
/** 구조 분해 할당 : destructuring assignment */
// ==========================================================
// Object.entries
let total = 0;

// for (let keyValue of Object.entries(salaries)) {
//   let key = keyValue[0];
//   let value = keyValue[1];
//   total += value;
// }

for (let [key, value] of Object.entries(salaries)) {
  // console.log(keyValue);
  total += value;
}

console.log(total);

// ===================================================

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

const [, , COLOR_GREEN] = color;

// ==========================================================
// 객체 구조분해할당 (destructuring assignments)
// ==========================================================

const { John, Ann, Pete } = salaries;

console.log(John);
