class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        if k>1:
            s=list(c for c in s)
            s.sort()
            return ''.join(s)
        s1=s
        for i in range(len(s)):
            s=s[1:]+s[0]
            s1=min(s1,s)
        return s1
