class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        result = []
        number = 0
        lent = len(digits) - 1
        for d in digits:
            number += d * (10**lent)
            lent -= 1
            
        number += 1
        for i in range(len(str(number)) - 1, -1, -1):
            digit = number // (10**i)
            result.append(digit)
            number = number % 10**i

        return result
        
digits = [9,9,9,9]
print(Solution().plusOne(digits))

digits = [1,2,3]
print(Solution().plusOne(digits))

digits = [4,3,2,1]
print(Solution().plusOne(digits))
