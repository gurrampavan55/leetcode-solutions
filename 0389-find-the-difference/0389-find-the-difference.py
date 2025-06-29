class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        count1=0
        count2=0
        for char in s:
            count1+=ord(char)
        for char in t:
            count2+=ord(char)
        return chr(count2-count1)