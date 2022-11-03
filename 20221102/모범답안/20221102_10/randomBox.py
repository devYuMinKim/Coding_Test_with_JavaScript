def getBuyMethod(P, K):
    count = [0 for _ in range(K)]
    result = 0
    for p in P:
        count[p] += 1

    for i in range (0, K):
        if count[i] >= 2:
            result = (result + ((count[i] * (count[i] - 1)) / 2))

    return result

def solution(A, K):
    psum = [0 for _ in range(len(A) + 1)]
    psum[0] = 0

    for i in range(1, len(A) + 1):
        psum[i] = (psum[i-1] + A[i-1]) % K
    return getBuyMethod(psum, K)