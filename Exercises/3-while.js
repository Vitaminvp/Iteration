"use strict";

const sum = (...args) => {
  let n = args.length - 1;
  let res = 0;
  while (n >= 0) {
    res += args[n];
    n--;
  }
  return res;
};

module.exports = { sum };
