def solution(schedule):
    '''
    :param schedule: list
    :return: int
    '''
    n = len(schedule)
    cntT, cntD = {}, {}
    
    for i in range(n):
        t, d = schedule[i]
        if t not in cntT:
            cntT[t] = 0
        if d not in cntD:
            cntD[d] = 0
        cntT[t] += 1
        cntD[d] += 1
 
    answer = n * (n-1) * (n-2) // 6

    for i in range(n):
        t, d = schedule[i]
        answer -= (cntT[t]-1) * (cntD[d]-1)
    
    return answer

