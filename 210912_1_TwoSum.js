// https://leetcode.com/problems/two-sum/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// first try
// 중복되는 계산 + 이중 반복문
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// second try
var twoSum = function(nums, target) {
  const storage = {} // Record<num, index>

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in storage) { // 현재값이 존재해? (이전에 내 페어가 있어?)
      return [storage[nums[i]], i] // 그럼 내 이름으로 저장된 내 페어의 인덱스와 현재 나의 인덱스를 리턴해
    }
    storage[target - nums[i]] = i // 그게 아니라면 내 페어를 키로 해서 현재 내 인덱스를 저장해
  }
  return []
};

// 변수로 풀어쓰자면 이렇게..
var twoSum = function(nums, target) {
  const storage = {} // Record<num, index>

  for (let i = 0; i < nums.length; i++) {
    const me = nums[i]
    const pair = target - me

    if (me in storage) { // 현재값이 존재해? (이전에 내 페어가 있어?)
      return [storage[me], i] // 그럼 내 이름으로 저장된 내 페어의 인덱스와 현재 나의 인덱스를 리턴해
    }
    storage[pair] = i // 그게 아니라면 내 페어를 키로 해서 현재 내 인덱스를 저장해 (미래의 내 페어가 쓸 수 있게)
  }
  return []
};
