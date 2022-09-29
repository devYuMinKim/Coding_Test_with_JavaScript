def solution(A):
    answer = 0
    arr = [A[0]]

    while len(arr) != len(A):
        arr.append([])
        for i in range (0, len(arr)):
            l = len(arr) - 1
            if i == 0:
                arr[l].append(A[l][0] + arr[l - 1][0])
            elif i == (len(arr) - 1):
                arr[l].append(A[l][l] + arr[l-1][l-1])
            else:
                arr[l].append(A[l][len(arr[l])] + min(arr[l-1][len(arr[l])], arr[l-1][len(arr[l])-1]))
    return min(arr[len(arr)-1])
