class Solution(object):
    def lemonadeChange(self, bills):
        """
        :type bills: List[int]
        :rtype: bool
        """
        tens=0
        fives=0
        for num in bills:
            if num==5:
                fives+=1
            elif num==10:
                if fives==0:
                    return False
                fives-=1
                tens+=1
            else:
                if tens>0 and fives>0:
                    tens-=1
                    fives-=1
                elif fives>=3:
                    fives-=3
                else:
                    return False
        return True

                

            
            


        