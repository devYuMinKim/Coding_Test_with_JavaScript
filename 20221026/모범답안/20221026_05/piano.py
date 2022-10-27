def solution(s):
    '''
    :param s: string
    :return: string
    '''

    group_count = 0
    current_group_start_index = -3

    for idx, c in enumerate(s):
        if c == '0':
            continue
        
        if current_group_start_index + 2 < idx:
            group_count += 1
            current_group_start_index = idx
    
    return 'YES' if group_count <= 2 else 'NO'