def solution(A, K):
    A.sort(reverse=True)
    div = K // len(A)
    first =  str(A.pop(div))
    mod = ((K-1) % (len(A)))
    second = str(A.pop(mod))
    return first + second