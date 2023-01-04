/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */

// 지금하는것은 얕은 복사입니다 ㅇㅋ~~~

// 복사(copy) vs. 참조(reference)

// 원시값은 그냥 복사가 된답
let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;
let conversationTool = messenger;

text = '하이 ㅋ'; // false로 나옴
// conversationTool.name = 'tool';

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);
// 같은 name을 바라보고 있기때문에 참조에 의한 복사!

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};

// for in 을 이용해서 key를 그대로 전달
for (const key in messenger) {
  cloneObject[key] = messenger[key];
}

cloneObject.name = 'line';
cloneObject.manufacture = 'naver';

console.log(cloneObject);
console.log(messenger);

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger); // 얕은 복사
copyObject.name = 'Twitter';

console.log(copyObject.name);
console.log(messenger.name);

// 3. 전개 연산자(...)를 사용한 복사 🎈 짱편함
const spreadObject = { ...messenger };

spreadObject.name = 'FaceBook';

console.log(messenger.name);
console.log(spreadObject.name);

// 4. 객체를 복사해주는 유틸 함수 (중괄호 없애두 댐 ㅋ)
const copydObject = (object) => {
  Object.assign({}, object);
};

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
console.log(combinedCssMap);

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles;

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
