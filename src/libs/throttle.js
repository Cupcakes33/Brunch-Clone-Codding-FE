/**
 *
 * @param {Function} func : 쓰로틀링 할 함수
 * @param {Number} timeout : 쓰로틀링 딜레이
 * @returns
 */

const throttle = (func, timeout) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, args);
      }, timeout);
    }
  };
};

export default throttle;
