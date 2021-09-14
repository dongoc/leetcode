// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

// first try
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true

  const str = x.toString()

  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
      if (str[i] !== str[str.length - 1 - i]) return false
  }

  return true
};
