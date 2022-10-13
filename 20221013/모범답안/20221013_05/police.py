def solution(n, k, theives):
    """
    :param n: int
    :param k: int
    :param theives: list
    :return: int
    """
    police, answer = 0, 0
    theives.sort(reverse=True)
    
    for i in range(k):
        if theives[i] > police:
            answer += 1
            police += n - theives[i]

    return answer
