import { xhrData, insertLast, xhrPromise } from './lib/index.js';

// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (res) => {
//     console.log(res);
//     insertLast('body', JSON.stringify(res)); // 화면에 보여주기
//   },
//   (err) => {
//     console.log(err);
//     insertLast('body', JSON.stringify(err));
//   }
// );

xhrPromise
  .get('https://jsonplaceholder.typicode.com/users/1') // promise가 남음
  .then((res) => {
    insertLast('body', JSON.stringify(res)); // 화면에 보여주기
  })
  .catch((err) => {
    console.log(err);
  });
