class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count=0
        for char in jewels:
            for charec in stones:
                if char==charec:
                    count+=1
        return count
        