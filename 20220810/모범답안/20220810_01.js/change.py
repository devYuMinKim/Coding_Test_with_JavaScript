def solution(A):
    moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]
    changes = 0

    for m in moneys:
        changes += (A // m)
        A %= m
    return changes