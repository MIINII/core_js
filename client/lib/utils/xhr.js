/* readyState
  0: uninitialized // 초기화 : 비동기를 오픈하지 않앗을때
  1: loading // 로딩 : 호출하지 않앗을때 (오픈만 햇을때)
  2: loaded // 로딩 완료된
  3: interactive // 인터렉티브
  4: complete // 완료
*/

import { typeError } from '../error/typeError.js';

// 재사용 가능한 함수로 만들어보기 method, url
// 얘도 파라미터에 구조분해 할당
export const xhrData = ({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Contetn-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) => {
  // const { method, url, body } = options; // 객체 구조분해할당
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // console.log(Object.entries(headers)); // 객체를 집어넣으면 key와 value를 배열로 반환

  // 헤더가 많이 들어가는 경우
  // Object.entries : static method / 배열 자체의 하나하나가 아이템이된다
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  xhr.addEventListener('readystatechange', () => {
    // 객체 구조분해할당
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log('통신성공');
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.error('통실패 ㅋ');
      onFail('통실패ㅋ');
    }
  });

  // 서버에 요청 : post 통신할때
  xhr.send(JSON.stringify(body)); // 보낼때는 문자형식으로 보내줘야함~
};

// #######################################
// xhrData에 메서드 추가해보기        #######
// #######################################
/* xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    onSuccess,
    onFail,
  });
};
*/

// 프라미스 방식으로 바까보기 ㅋ

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'applictaion/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null,
};

export const xhrPromise = (options = {}) => {
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign({}, defaultOptions, options);

  if (!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject('에러입니다.');
      }
    });
  });
};

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};
