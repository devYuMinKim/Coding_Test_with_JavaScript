def solution(A, K):
    A.sort()
    A.append(0)

    temp = 0
    for i in range(len(A)):
        temp += A[i]
        if temp > K:
            break

    return i
