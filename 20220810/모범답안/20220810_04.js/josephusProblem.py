def solution(N, K):
    arr = [i for i in range(1, N+1)]
    number = 0
    for _ in range(N - 1):
        number += (K - 1)
        number %= len(arr)
        arr.remove(arr[number])

    return arr[0]
