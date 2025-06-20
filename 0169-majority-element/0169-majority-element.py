class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count=0
        candiate=None

        for num in nums:
            if count==0:
                candiate=num
            if num==candiate:
                count+=1
            else:
                count-=1
        return candiate

        