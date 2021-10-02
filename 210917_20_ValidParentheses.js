// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracketPair = {
      '(': ')',
      '{': '}',
      '[': ']'
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    let pair = stack[stack.length - 1]

    if (s[i] in bracketPair) {
      stack.push(s[i])
    } else if (pair in bracketPair && bracketPair[pair] === s[i]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
};
