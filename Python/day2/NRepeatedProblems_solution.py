from typing import List


class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        seen = []
        for x in nums:
            if x in seen:
                return x
            seen.append(x)
        

nums = [5,1,5,2,5,3,5,4]
print(Solution().repeatedNTimes(nums))

nums = [1,2,3,3]
print(Solution().repeatedNTimes(nums))

nums = [2,1,2,5,3,2]
print(Solution().repeatedNTimes(nums))