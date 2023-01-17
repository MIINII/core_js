import { getNode } from '../dom/getNode.js';

const first = getNode('.first');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 콜백지옥
delay(() => {
  first.style.top = '-100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
    });
  });
});

// 콜백의 가독성을 위해서 프라미스 사용