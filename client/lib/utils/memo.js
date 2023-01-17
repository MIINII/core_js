// 캐시에 저장

export const memo = (key, callback) => {
  const cache = {};

  // 클로저
  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.log(`${key}값은 이미 캐시된 값이 존재합니다`);
      return;
    }

    cache[key] = callback();
  };
};

// memo() -> 함수 바디를 반환, 클로저를 부르기 위해선 두번 호출 해야함
// console.log(memo()('name',()=>'miinii')) -> 보기싫음 => IIFE 패턴 사용
// 메모를 해놧다가 언제든 꺼내쓸수 잇는 개념

// 함수로 처리하는게 더 많이 들어감~
// memo('cube', () => document.querySelector('#cube'));
// memo('cube', () => '이것은 큐브');
