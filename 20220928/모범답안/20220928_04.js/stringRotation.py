def solution(S1, S2):
    S1 = S1 + S1

    if S1.find(S2) == -1:
        return 0
    else:
        return 1
