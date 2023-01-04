/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// };

let arr = [1, 2, 3, 4];

// rest(나머지) 파라미터(...args) : 함수밖에선 spread
const calculateTotal = (...args) => {
  // console.log(args);
  let total = 0;

  args.forEach((item, index) => {
    total += item;
  });

  return args.reduce((acc, item) => acc + item);
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => {
  return a + b + c + d;
};

console.log(calcAllMoney(1, 2, 3, 4));

// 화살표 함수와 this
function normalFunction() {
  // 나를 호출한 대상 참조
  console.log('일반함수 :', this);
}

const arrowFunction = () => {
  // this자체를 바인딩 하지 않음, 부모를 찾음 ㅋ
  console.log('화살표함수 : ', this);
};

normalFunction();
arrowFunction();

const user = {
  name: 'miinii',
  age: 28,
  address: '은하계 지구',
  grades: [80, 90, 100],
  // WHAT 객체 안에서의 메소드로는 일반함수가 더 좋음!!!
  totalGrades: function () {
    let total = 0;
    this.grades.forEach(function (item) {
      total += item;
    });
    return total;
  },
};

console.log('🚀 ⁝ user.totalGrades()', user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 0;
  for(let i=0; i<powerCount; i++){
    result *= numeric
  }
};

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
};

let repeat2 = (text, repeatCount) => {
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      acc + text;
    }, '');
};
