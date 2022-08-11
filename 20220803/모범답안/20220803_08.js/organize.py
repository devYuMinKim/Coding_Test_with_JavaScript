def solution(stock):
    '''
    :param stock: list
    :return: int
    '''
    x = 0
    y = len(stock) - 1
    while stock[x] <= stock[x+1]:
        x += 1
    while stock[y] >= stock[y-1]:
        y -= 1

    arr = stock[x:y+1]
    arr[0], arr[-1] = arr[-1], arr[0]

    cond_l = True if x-1 < 0 else arr[0] >= stock[x-1]
    cond_r = True if y+1 == len(stock) else stock[y+1] >= arr[-1]
    if cond_l and cond_r:
        for i in range(len(arr) - 1):
            if arr[i] > arr[i+1]:
                break
        else:
            return 1
        
    arr[0], arr[-1] = arr[-1], arr[0]
    
    cond_l = True if x-1 < 0 else stock[x-1] <= arr[-1]
    cond_r = True if y+1 == len(stock) else  arr[0] <= stock[y+1]
    if cond_l and cond_r:
        for i in range(len(arr) - 1):
            if arr[i] < arr[i+1]:
                break
        else:
            return 1

    return 0
