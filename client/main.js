import {
  diceAnimation,
  getNode,
  getNodes,
  disableElement,
  enableElement,
  visibleElement,
  invisibleElement,
  insertLast,
  attr,
  clearContents,
} from './lib/index.js';

// [주사위 굴리기]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어
// 4. 변수 보호를 위한 클로저 + IIFE 사용

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기

/*
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');

// 반복작업 안하게
// clearTimeout(id)
// clearInterval();

// let stopAnimation;
// let isRolling = false;


const handlerRollingDice = () => {
  // diceAnimation();
  let stopAnimation;
  let isRolling = false;

  // 클로저
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 1000);
    } else {  
      clearInterval(stopAnimation);
    }

    isRolling = !isRolling;
  };

};
*/

// 배열의 구조분해할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

const recordListWrapper = getNode('.recordListWrapper');

// #######################################################################
// Render #################################################################
// #######################################################################

let count = 0;
let total = 0;

function renderRecordListItem() {
  let diceValue = +attr('#cube', 'data-dice');

  let template = /*html*/ `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${(total += diceValue)}</td>
    </tr>
  `;

  insertLast('.recordListWrapper tbody', template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

// #######################################################################
// Event #################################################################
// #######################################################################

// IIFE 패턴 사용
const handleRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 700);
      disableElement(recordButton);
      // recordButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
      // recordButton.disabled = false;
    }

    isRolling = !isRolling;
  };
})();

const handleRecord = () => {
  visibleElement(recordListWrapper);
  renderRecordListItem();
};

const handleReset = () => {
  count = 0;
  total = 0;

  invisibleElement(recordListWrapper);
  clearContents('recordWrapper tbody');
};

// let eventOff = bindEvent(rollingDiceButton, 'click', handlerRollingDice)
// handlerRollingDice() => 함수내의 결과값이 반환되어야하기때문에 ()를 붙인다~ [이벤트 발생시 함수자체를 반환해줌]
// rollingDiceButton.addEventListener('click', handlerRollingDice()); // IIFE 사용 안햇을시
rollingDiceButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
