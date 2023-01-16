import { diceAnimation } from './lib/index.js';
import { getNode } from './lib/dom/getNode.js';
// import { insertBefore } from './lib/dom/insert';

// [주사위 굴리기]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어
// 4. 변수 보호를 위한 클로저 + IIFE 사용



const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');

// 반복작업 안하게
// clearTimeout(id)
// clearInterval();

// let stopAnimation;
// let isRolling = false;

/*
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

// IIFE
const handlerRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 700);
    } else {
      clearInterval(stopAnimation);
    }

    isRolling = !isRolling;
  };
})();

// let eventOff = bindEvent(rollingDiceButton, 'click', handlerRollingDice)
// handlerRollingDice() => 함수내의 결과값이 반환되어야하기때문에 ()를 붙인다~ [이벤트 발생시 함수자체를 반환해줌]
// rollingDiceButton.addEventListener('click', handlerRollingDice()); // IIFE 사용 안햇을시
rollingDiceButton.addEventListener('click', handlerRollingDice);
