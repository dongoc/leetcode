class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        
        while left < right:
            mid = math.floor((left + right) / 2)
            
            if target == nums[mid]:
                return mid
            elif target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
                
        return left if target <= nums[left] else right + 1
        
        
  # ----- First Try ------
  class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        mid = math.floor((left + right) / 2)
        
        while left < right:
            if target == nums[mid]:
                return mid
            elif target < nums[mid]:
                right = mid - 1
                mid = math.floor((left + right) / 2)
            else:
                left = mid + 1
                mid = math.floor((left + right) / 2)
                
        if target == nums[mid]: return mid
        if target < nums[left]: return left
        if target > nums[right]: return right + 1
