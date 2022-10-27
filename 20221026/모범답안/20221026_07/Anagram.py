def solution(a, b):
    '''
    :param a: string
    :param b: string
    :return: string
    '''

    filtered_a = []
    for c in a:
        if c.isalpha():
            filtered_a.append(c.lower())
    
    filtered_b = []
    for c in b:
        if c.isalpha():
            filtered_b.append(c.lower())
    
    if "".join(filtered_a) == "".join(filtered_b):
        return 'NO'
    
    filtered_a.sort()
    filtered_b.sort()

    if "".join(filtered_a) == "".join(filtered_b):
        return 'YES'
    
    return 'NO'
