def solution(arr, brr):
    '''
    :param arr: list
    :param brr: list
    :return: int
    '''
    for i in range(len(arr)):
        x, y = min(arr[i], brr[i]), max(arr[i], brr[i])
        arr[i] = x
        brr[i] = y
        
    return max(arr) * max(brr)
