// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */

// first try
var reverse = function(x) {
  const max = Math.pow(2, 31)
  let num = Number(Math.abs(x).toString().split('').reverse().join(''))
  if (x < 0) num *= -1
  if (num > max || num < (max - 1) * -1) return 0
  return num
};

// second try
var reverse = function(x) {
  const num = (x < 0
    ? Number(Math.abs(x).toString().split('').reverse().join('')) * -1
    : Number(Math.abs(x).toString().split('').reverse().join(''))
  )
  return Math.abs(num) > Math.pow(2, 31) ? 0 : num
};
