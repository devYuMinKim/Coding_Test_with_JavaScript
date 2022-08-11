def solution(ini, trans):
    '''
    :param ini: string
    :param trans: string
    :return: string
    '''
    if ini.count('y') != trans.count('y'):
        return "NO"

    j = 0
    for i in range(len(ini)):
        if ini[i] == 'y':
            continue
        while trans[j] == 'y':
            j += 1
        if ini[i] != trans[j] or (ini[i] == 'x' and i > j) or (ini[i] == 'z' and i < j):
            return "NO"
        j += 1
    else:
        return "YES"
