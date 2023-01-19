import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// 콜백지옥
// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//     });
//   });
// });

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMsg: '알수없는 오류가 발생했습니다',
};

// 콜백의 가독성을 위해서 프라미스 사용
export const delayP = (option = {}) => {
  // defaultOptions
  let config = { ...defaultOptions }; // 01. 컨피그에 디폴트 옵션 전달

  // 객체 합성 mixin = 기존의값 + 옵션으로 전달한 값
  if (isObject(option)) {
    config = { ...config, ...option };
  }

  const { shouldReject, data, errorMsg, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMsg);
    }, timeout);
  });
};

// delayP(3000).then((res) => {
//   console.log(res);
// });

// Async await : function앞에 async를 붙이면 항상 promise를 반환
// async : 일반 함수를 promise를 반환하는 함수로 만든다
// await : 1. promise가 반환하는 result 가져오기 / 2. 코드 실행 흐름 제어

async function delayA() {
  return '완료';
}

let result = await delayA();

async function 라면끓이기() {
  try {
    await delayP(1500);
    first.style.top = '-100px';

    await delayP(1500);
    first.style.transform = 'rotate(360deg)';

    await delayP(1500);
    first.style.top = '0px';

    await delayP(1500);
    console.log('계란넣기');

    await delayP(1500);
    console.log('그릇에담기');

    throw new Error('계란껍질이 들어갓다');
    // await delayP();
    // console.log('그릇에 담기');

  } catch (err) {
    console.log(err);
  }
}

// 라면끓이기();
