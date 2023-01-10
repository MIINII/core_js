/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector('.first');
// let span = document.querySelectorAll(span);

let [first, second] = document.querySelectorAll('span');

console.log('🚀 ⁝ first', first);
console.log('🚀 ⁝ second', second);

// console.log('🚀 ⁝ span', span);

function getNode(node) {
  return document.querySelector(node);
}

console.log(getNode('.first'));

/* 문서 대상 확인 */
// - matches
// - contains
