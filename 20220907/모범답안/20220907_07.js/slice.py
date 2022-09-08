def solution(A):
    count = 0

    A = sorted(A, key = lambda x: x[1] - x[0])

    while len(A) > 0:
        temp = A[0]
        A.remove(A[0])
        count += 1

        for a in filter(lambda x : x[0] <= temp[1] and x[1] >= temp[0], A):
            A.remove(a)

    return count