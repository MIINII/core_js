/* ---------------------------------------------------------------------- */
/* DOM Node Class                                                         */
/* ---------------------------------------------------------------------- */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* 노드 정보 ------------------------------------------------------------- */
let first = getNode('.first');

// - nodeType
console.log(first.nodeType === document.ELEMENT_NODE);
console.log(first.nodeType === 1);

// - nodeName (vs. tagName)
console.log(first.nodeName === 'SPAN');
console.log(first.tagNmae === 'SPAN');

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// innerHTML 자체가 태그를 string 타입으로 받아도 자기가 태그로 알아서 인식
// innerHTML이면 므째이만 딱 나오고 textcontent는 저거 전체가 다 나옴. 태그인식을못하기 때문
// 그래서 이렇게 아무나 html을 삽입해버리면 큰일나니까 보안이 안좋아서 innerHTML은 현업에서 잘 안쓰는거

// * 기존 내용 삭제
first.innerHTML = '';
// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += ' <strong>like lion</strong>';

// - textContent
console.log(first.textContent); // get

// * 요소 내의 텍스트에 접근
first.textContent = '멋쟁이 사자처럼'; //set

// * 태그는 제외하고 오로지 텍스트만 추출

/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

// getNode('h1').hidden = true;
first.hidden = true;
