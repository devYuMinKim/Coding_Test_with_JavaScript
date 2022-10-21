def solution(A):
    total = len(A)
    answer = 0
    tick = 0
    q = []

    while True:
        index = 0
        while True:
            if index >= len(A): break
            if A[index][0] <= tick:
                q.append(A[index])
                A.remove(A[index])
            else:
                index += 1

        if len(q) == 0:
            if len(A) == 0: break
            else: tick += 1
        else:
            minIndex = 0
            for i in range(1, len(q)):
                if q[minIndex][1] > q[i][1]: minIndex = i
            tick += q[minIndex][1]
            answer += tick - q[minIndex][0]
            q.remove(q[minIndex])

    return answer / total