def solution(stats, k):
    """
    :param stats: list
    :param k: int
    :return: list
    """
    da = {}
    for stat in stats:
        if stat in da:
            da[stat] += 1
        else:
            da[stat] = 1

    sa = list(sorted(list(set(stats))))

    ans_n = 0
    ans_l = -1
    ans_r = -1

    cur_n = 0
    cur_l = -1
    cur_r = -1

    for i in sa:
        if cur_r == i - 1 and da[i] >= k:
            cur_n += 1
            cur_r += 1
        else:
            if cur_n > ans_n:
                ans_n = cur_n
                ans_l = cur_l
                ans_r = cur_r
            cur_n = 1 if da[i] >= k else 0
            cur_l = i if da[i] >= k else -1
            cur_r = i if da[i] >= k else -1

    if cur_n > ans_n:
        ans_n = cur_n
        ans_l = cur_l
        ans_r = cur_r

    if ans_n == 0:
        return -1
    else:
        return ans_l + ans_r
