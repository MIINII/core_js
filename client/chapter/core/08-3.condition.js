/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('디코켜키');
    break;
  case LUNCH:
    console.log('밥먹기');
    break;
  case DINNER:
    console.log('멘토링 수업준비 ㅋ');
    break;
  case NIGHT:
    console.log('스터디 준비');
    break;
  case LATE_NIGHT:
    console.log('꿈꾸기');
    break;
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('디코 켜캬');
} else if (thisTime === LUNCH) {
  console.log('점심먹기');
} else if (thisTime === DINNER) {
  console.log('저녁먹기');
}

/* switch vs. if -------------------------------------------------------- */

// 임의 숫자를 넣어서 무슨 요일인지 알려주는 함수를 만들어보자

let today = new Date().getDay();
console.log('🚀 ⁝ today', today);

function getToday(today) {
  switch (today.getDay()) {
    case 0:
      '월';
      break;
    case 1:
      '화';
      break;
    case 2:
      '수';
      break;
    case 3:
      '목';
      break;
    case 4:
      '금';
      break;
    case 5:
      '토';
      break;
    case 6:
      '일';
      break;
  }
}

// console.log(getToday(today));

const cm = +prompt('cm 단위의 숫자를 입력해주세요');
const inch = cm * 0.393701;

console.log(`${cm}cm는 ${inch}inch 입니다.`)