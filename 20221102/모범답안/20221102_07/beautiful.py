def solution(beautiful):
    '''
    :param beautiful: list
    :return: int
    '''
    n = len(beautiful)

    if n == 1:
        return 0
    else:
        answer = float("inf")
        for j in range(n):
            freq = {}
            for i in range(n):
                if i != j:
                    d = round((beautiful[i] - beautiful[j])/(i-j), 10)
                    freq[d] = freq.get(d, 0) + 1
            answer = min(answer, n - 1 - max(freq.values()))
        
        return answer
