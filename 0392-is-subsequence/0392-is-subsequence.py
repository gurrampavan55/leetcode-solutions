class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s)>len(s):
            return False
        slow=0
        for i in range(len(t)):
            if slow==len(s):
                break
            if s[slow]==t[i]:
                slow+=1
            
        if slow==len(s):
            return True
        else:
            return False


        