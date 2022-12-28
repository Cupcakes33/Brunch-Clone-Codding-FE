/**
 * 
 * @param {Function} func : 디바운싱 할 함수
 * @param {Number} timeout : 디바운싱 딜레이
 * @returns 
 */

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default debounce;

