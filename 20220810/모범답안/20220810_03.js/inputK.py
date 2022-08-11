def solution(N, K):
    arr = [ s for s in str(N) ];
    insert = 0

    if N >= 0:
        for i in range(0, len(arr)):
            if int(arr[i]) <= K:
                arr.insert(i, str(K))
                insert = 1
                break
    else:
        for i in range(1, len(arr)):
            if int(arr[i]) > K:
                arr.insert(i, str(K))
                insert = 1
                break

    if insert == 0:
        arr.append(str(K))

    return (int("".join(arr)))
