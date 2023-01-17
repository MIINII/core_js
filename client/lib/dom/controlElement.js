import { isElement } from '../utils/typeOf.js';
import { typeError } from '../error/typeError.js';

/**
 * @function isElement checkElent
 * @param {HTMLElement} node
 * @return {disabled} set disabled
 */

export function disableElement(node) {
  if (!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다');
  }

  node.disabled = true;
}

export function enableElement(node) {
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다');
  }

  node.disabled = false;
}

export function visibleElement(node) {
  // 보여야함
  if (!isElement(node)) {
    typeError('visibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.');
  }
  node.hidden = false;
}

export function invisibleElement(node) {
  // 안보여야함
  if (!isElement(node)) {
    typeError('invisibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.');
  }
  node.hidden = true;
}

// disableElement()
