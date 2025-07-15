class Solution(object):
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """
        con=""
        binary=""
        while num>0:
            binary=str(num%2)+binary
            num//=2
        for i in binary:
            if i=="0":
                con+="1"
            else:
                con+="0"
        re=0
        i=0
        for j in con[::-1]:
            re+=int(j)*(2**i)
            i+=1
        return re


        