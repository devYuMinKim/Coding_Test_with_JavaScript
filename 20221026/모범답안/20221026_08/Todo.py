def solution(y, m, d, repeat):
    '''
    :param y: int
    :param m: int
    :param d: int
    :param repeat: string
    :return: string
    '''

    if repeat == 'd':
        d += 1

        if getEndDate(y, m) < d:
            d = 1
            m += 1
        if m > 12:
            m = 1
            y += 1

    if repeat == 'm':
        m += 1

        if m > 12:
            m = 1
            y += 1

        if getEndDate(y, m) < d:
            d = getEndDate(y, m)
        
    if repeat == 'y':
        y += 1

        if getEndDate(y, m) < d:
            d = getEndDate(y, m)
    
    return f'{y}-{m}-{d}'

def isLeapYear(y):
    return y % 400 == 0 or (y % 4 == 0 and y % 100 != 0)

def getEndDate(y, m):
    endDate = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if isLeapYear(y) and m == 2:
        return 29
    return endDate[m]
