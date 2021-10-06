// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let first = 0
  let last = nums.length - 1
  let mid = Math.floor((first + last) / 2)

  while(mid >= first && mid <= last) {
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {

    } else {

    }

    mid = Math.floor((first + last) / 2)
  }

  return 0
};
