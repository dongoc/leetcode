// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ''

  for (let i = 0; i < strs[0].length; i += 1) {
      if (strs.every(str => strs[0][i] === str[i])) {
          prefix += strs[0][i]
      } else {
          return prefix
      }
  }

  return prefix
};
