def solution(plans):
    """
    :param plans: list
    :return: int
    """
    ls = []
    for j in range(len(plans)):
        t = int(plans[j])
        ls.append(t)

    cnt = 0
    flag = 0

    for j in range(len(plans)-2, -1, -1):
        while(ls[j] >= ls[j+1]):
            if ls[j] != int(ls[j]/2):
                cnt += 1
                ls[j] = int(ls[j]/2)
            else:
                flag = 1
                break

    if flag == 1:
        return '-1'
    else: 
        return cnt
