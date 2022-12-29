/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */
// let number = prompt('숫자를 입력하쇼');

// let message = number > 0 ? 1 : number < 0 ? -1 : number == 0 ? 0 : '숫자여?';
// alert(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';

if (didWatchMovie.includes('yes')) {
  // if 문(statement)
  console.log('재밋냐');
  // else if 복수 조건 처리
} else if (goingToWatchMovie == 'yes') {
  console.logt('같이가잉');
} else {
  // else 절(caluse)
  console.log('시러');
}

let movieMessage = didWatchMovie.includes('yes')
  ? '재미있더라'
  : goingToWatchMovie === 'yes'
  ? '같이 보러가잉'
  : '싫어잉';

// 조건부 연산자
let firstName = '';
let lastName = '';
let nickName = '미니';

console.log(firstName || lastName || '익명');

// 멀티 조건부 연산자 식
