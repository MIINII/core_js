/*global gsap */
import {
  miinii,
  renderUserCard,
  renderSpinner,
  renderEmpty,
  getNode as $,
  changeColor,
  delayP,
  attr,
} from './lib/index.js';

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
    await delayP(1000);

    $('.loadingSpinner').remove();

    let response = await miinii.get('http://localhost:3000/users');

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

const deleteHandler = (e) => {
  // closest 부모를 찾아서 올라감
  let deleteButton = e.target.closest('button'); // 이벤트 위임 : 누른대상에서 가장 인접한 버튼만 찾아라
  let article = e.target.closest('article'); // 아티클에 있는 id를 조회하여 삭제하기 위해서

  if (!deleteButton || !article) return; // 다른동작을 햇을떄 아무일도 일어나지 않게 하기 위해서

  let id = attr(article, 'data-index').slice(5);

  console.log('🚀 ⁝ deleteHandler ⁝ id', id);

  miinii.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = '';
    renderUserList();
  });
};

// 삭제버튼을 누르면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요
userCardContainer.addEventListener('click', deleteHandler);
