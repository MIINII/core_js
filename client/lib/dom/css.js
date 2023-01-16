const addClass = (node, className) => {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof className !== 'string') {
    typeError('addClass 함수에 두번쨰 인자는 문자타입이어야');
  }

  node.classList.add(className);
};

// 변경하기 : 대상의 클래스를 지운다
const removeClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    typeError('addClass 함수에 두번쨰 인자는 문자타입이어야');
  }

  node.classList.remove(className);
};

// x토글 : 클래스 껐켯
const toggleClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    typeError('addClass 함수에 두번쨰 인자는 문자타입이어야');
  }

  node.classList.toggle(className);
};

// addClass('.first', 'aaa');
// removeClass('.first', 'aaa');
// toggleClass('.first', 'is-active');

// ==============================================================================================

// 자바스크립트에선 객체의 key, value 가ㅣㅄ을 변수로 받기위해서는 . 사용 X
// [ ] 각괄호 표기법
const getCss = (node, poatato) => {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!poatato in document.body.style) {
    syntaxError('getCSS 함수의 두번쨰 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  return getComputedStyle(node)[prop];
};

const setCss = (node, prop, value) => {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (!poatato in document.body.style) {
    syntaxError('setCss 함수의 두번쨰 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  if (!value) {
    syntaxError('setCss 함수의 세번재 인자는 필수입다');
  }

  node.style[prop] = value;
};

const css = (node, prop, value) => {
  // if (!value) {
  //   getCss(node, prop);
  // } else {
  //   setCss(node, prop, value);
  // }
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};

css('.first', 'font-size', '100px'); // set
css('.first', 'font-size'); // get
