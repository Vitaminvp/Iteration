"use strict";

const sum = (...args) => {
  let n = args.length - 1;
  let res = 0;
  if (n <= 0) return res;
  do {
    res += args[n];
    n--;
  } while (n >= 0);
  return res;
};

module.exports = { sum };
