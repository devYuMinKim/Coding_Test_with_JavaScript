def solution(arr):
    '''
    :param arr: int[]
    :return: int
    '''

    arr.sort(reverse=True)
    n = len(arr)


    border = n // 2 - 1
    i = n // 2
    while i < n and arr[border] == arr[i]:
        i += 1
    
    return i
