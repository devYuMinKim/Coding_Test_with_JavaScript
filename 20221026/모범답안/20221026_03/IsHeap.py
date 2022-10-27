def solution(arr):
    '''
    :param arr: int[]
    :return: string
    '''

    isHeap = True

    for i in range(1, len(arr)):
        if 2 * i < len(arr) and arr[i] > arr[2 * i]:
            isHeap = False
            break
        
        if 2 * i + 1 < len(arr) and arr[i] > arr[2 * i + 1]:
            isHeap = False
            break
    
    return 'YES' if isHeap else 'NO'
            

            