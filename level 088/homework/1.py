def solution(s):
    if len(s) % 2 != 0:
        s += "_"
    
    result = []
    for i in range(0, len(s), 2):
        result.append(s[i:i+2])
    
    return result



def find_nb(m):
    total = 0 
    n = 0     
    
    while total < m:
        n += 1             
        total += n ** 3    
    
    return n if total == m else -1