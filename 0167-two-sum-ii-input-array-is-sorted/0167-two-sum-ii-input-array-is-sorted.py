class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        left=0
        right=len(numbers)-1
        while left<right:
            curr_sum=numbers[left]+numbers[right]
            if curr_sum==target:
                return [left+1,right+1]
            elif curr_sum>target:
                right-=1
            else:
                left+=1
        