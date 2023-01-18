let arr = [10, 100, 400, 600];

const user = {
  name: '미니',
};

// // this를 사용해야하는 일이 생긴다면, this를 내가 알고있는 this로 지정해주겟다
// arr.forEach((item, index) => {
//   console.log(this); // 아래 user를 this로 지정
// }, user);

// arr.forEach(function (item, index) {
//   console.log(this);
// }, user);

// reduce

const cats = [
  {
    name: '삼색',
    age: 4,
    job: '삼색가문 창시자',
  },
  {
    name: '도도',
    age: 4,
    job: '길막이네 장녀',
  },
  {
    name: '길막이',
    age: 6,
    job: '길막가문 창시자',
  },
  {
    name: '작삼',
    age: 1,
    job: '카오네 딸',
  },
];

// cats.reduce((acc, cur) => {
//   return acc + cur.age;
// }, 0); // 여기에 초기값을 설정해줌(문자인지 배열인지 어떤건지)

// 최종값을 반환하는게 reduce의 목적
// 새로운 무언갈 만들때 : 결과를 내뱉어줘야함(return)

let age = cats.reduce((acc, cur) => acc + cur.age, '');

let jobs = cats.reduce((acc, cur) => {
  acc.push(cur.job);
  return acc;
}, []);

console.log(age);
console.log(jobs);

let temp = cats.reduce((acc, cur) => {
  return acc + `<li>${cur.name}의 직업은 ${cur.job} 입니다</li>`;
}, '');

console.log(temp);
