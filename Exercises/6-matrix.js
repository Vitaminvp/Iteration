"use strict";

const max = matrix => {
  /*
   * qwrqwtqwt wqtw tq
   * qwrqwtqwt wqtw tq
   * qwrqwtqwt wqtw tq
   * */
  const matrixFlat = matrix.flat(Infinity);
  let maximum = matrixFlat[0];
  for (let i = 1; i < matrixFlat.length; i++) {
    if (matrixFlat[i] > maximum) maximum = matrixFlat[i];
  }
  return maximum;
};

module.exports = { max };
