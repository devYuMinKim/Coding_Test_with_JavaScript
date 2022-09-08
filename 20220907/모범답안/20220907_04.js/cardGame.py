def solution(A):
    A.sort()
    answer = 0
    length = len(A)
    while length > 0:
        if length % 2 == 1:
            answer += (length * A[-1])
            A.remove(A[-1])
        else:
            answer += (length * A[0] * -1)
            A.remove(A[0])
        length -= 1

    return answer
