import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

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

delayP(3000).then((res) => {
  console.log(res);
});
