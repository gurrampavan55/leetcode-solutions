class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        slow=0
        n=len(nums)
        for fast in range(n):
            if nums[fast]!=0:
                nums[slow]=nums[fast]
                slow+=1
        for i in range(slow,n):
            nums[i]=0