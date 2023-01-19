/*global gsap */
import { miinii, renderUserCard, renderSpinner, renderEmpty, getNode as $, changeColor, delayP } from './lib/index.js';

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) => {
    console.log(res);
    insertLast('body', JSON.stringify(res)); // 화면에 보여주기
  },
  (err) => {
    console.log(err);
    insertLast('body', JSON.stringify(err));
  }
);

xhrPromise
  .get('https://jsonplaceholder.typicode.com/users/1') // promise가 남음
  .then((res) => {
    insertLast('body', JSON.stringify(res)); // 화면에 보여주기
  })
  .catch((err) => {
    console.log(err);
  });
*/

// renderUserList 함수 만들기ㅣ
// ajax(miinii) get user List

// 유저 카드 생성
// 생성된 카드로 렌더링

// 1. userList.js 로 갑니다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard를 던진후
// 4. renderUserCard함수를 사용했을 때 랜더링이 잘 될 수 있도록 한다!

const userCardContainer = $('.user-card-inner');

const renderUserList = async () => {
  renderSpinner(userCardContainer);

  try {
    await delayP(3000);

    $('.loadingSpinner').remove();

    let response = await miinii.get('https://jsonplaceholder.typicode.com/users/');

    let userData = response.data;
    console.log('🚀 ⁝ renderUserList ⁝ userData', userData);

    // 배열일때 랜더링
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    // html로 어떻게 랜더링하냐면요
    // insertLast(userCardContainer, createUserCard(userData));
    renderUserCard(userCardContainer, userData);

    changeColor('.user-card');

    gsap.to(gsap.utils.toArray('.user-card'), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    renderEmpty(userCardContainer);
  }
};

renderUserList();
